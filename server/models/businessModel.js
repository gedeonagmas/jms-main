import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import * as valid from "../utils/validator.js";

const institutionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Company name is required"],
      unique: [true, "{PATH} '{VALUE}' is taken"],
    },

    tinNumber: {
      type: String,
      required: [true, "Tin number is required"],
      validate: valid.paragraph("tin number", 4, 200),
      unique: [true, "This Tin number is taken"],
    },

    address: {
      type: String,
      required: [true, "{PATH} is required"],
      validate: valid.paragraph("Address"),
    },

    description: {
      type: String,
      required: [true, "description is required"],
      validate: valid.paragraph("description", 100, 1000),
    },

    secondPhone: {
      type: String,
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

institutionSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

uniqueValidator.defaults.message = "{PATH} '{VALUE}' is taken";
institutionSchema.plugin(uniqueValidator);

export const Business = mongoose.model("business", institutionSchema);
