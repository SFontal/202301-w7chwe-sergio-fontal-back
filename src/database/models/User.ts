import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  image: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", userSchema, "users");

export default User;
