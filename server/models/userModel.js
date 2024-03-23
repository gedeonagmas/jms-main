import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";
import uniqueValidator from "mongoose-unique-validator";
import * as valid from "../utils/validator.js";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      validate: function () {
        return this.userType === "business" ? null : valid.name("First name");
      },
      // required: function () {
      //   return this.userType === "business"
      //     ? false
      //     : [true, "First name is required"];
      // },
    },

    middleName: {
      type: String,
      validate: function () {
        return this.userType === "business" ? null : valid.name("Middle name");
      },
      // required: function () {
      //   return this.userType === "business"
      //     ? false
      //     : [true, "Middler name is required"];
      // },
    },

    lastName: {
      type: String,
      validate: function () {
        return this.userType === "business" ? null : valid.name("Last name");
      },
      // required: function () {
      //   return this.userType === "business"
      //     ? false
      //     : [true, "Last name is required"];
      // },
    },

    gender: {
      type: String,
      validate: function () {
        return this.userType === "business" ? null : valid.gender("Gender");
      },
      // required: function () {
      //   return this.userType === "business"
      //     ? false
      //     : [true, "Gender is required"];
      // },
    },

    // userName: {
    //   type: String,
    //   // unique: [true, "This user name address is taken"],
    //   validate: valid.userName("User name"),
    //   // required: [true, "User name is required"],
    // },

    email: {
      type: String,
      unique: [true, "This email address is taken"],
      validate: valid.email("Email"),
      required: [true, "Email is required"],
    },

    phone: {
      type: String,
      validate: valid.phone("Phone"),
      // required: [true, "Phone is required"],
    },

    address: {
      type: String,
      validate: valid.paragraph("Address", 4, 200),
      // required: [true, "Address is required"],
    },

    role: { type: String, default: "private" },

    nationality: {
      type: String,
      validate: valid.paragraph("Nationality", 4, 100),
    },
    // userType: { type: String, required: [true, "User type is required"] },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // ref: function () {
      //   return this.role === "lawyer"
      //     ? "lawyer"
      //     : this.role === "business"
      //     ? "institute"
      //     : this.role === "case-manager-main" ||
      //       this.role === "case-manager-regular" ||
      //       this.role === "case-manager-external"
      //     ? "case-manager"
      //     : this.role === "super-admin"
      //     ? "super-admin"
      //     : "private";
      // },
      ref: "lawyer",
    },
    password: {
      type: String,
      select: false,
      validate: valid.password("Password"),
    },
    permission: {
      type: Object,
    },
    confirmPassword: {
      type: String,
      validate: valid.confirmPassword("Confirm password"),
    },
    isPro: {
      type: Boolean,
      default: false,
    },
    modifiedDate: Number,
    passwordChangedAt: Number,
    resetToken: String,
    resetTokenExpires: Number,
    profilePicture: {
      type: String,
      default: "",
      // "https://res.cloudinary.com/dkvjvnil8/image/upload/v1689691516/defaultProfile.jpg",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.passwordCheck = async (
  currentPassword,
  candidatePassword
) => {
  return await bcrypt.compare(candidatePassword, currentPassword);
};

userSchema.methods.isPasswordChanged = async function (iat) {
  return iat <= parseInt(this.passwordChangedAt / 1000, 10);
};

userSchema.methods.createResetToken = async function () {
  const resetToken = await crypto.randomBytes(32).toString("hex");
  this.resetToken = await crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetTokenExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

userSchema.methods.isTokenExpired = async function () {
  return this.resetTokenExpires < Date.now();
};

userSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now() + 1000;
  next();
});

uniqueValidator.defaults.message = "{PATH} '{VALUE}' is taken";
userSchema.plugin(uniqueValidator);
export const User = mongoose.model("user", userSchema);
