import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
      type:String,
      required:true,
      unique:true
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    photo: {
      data: Buffer, // Store photo as binary data in Buffer
      contentType: String // Store the content type of the photo
    }
  });
  
  const User = mongoose.model('User', userSchema);

  export default User