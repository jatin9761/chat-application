import { name } from "ejs";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullname: 
  { type: String, require: true },


  email:
   { type: String, require: true, unique: true, lowercase: true },


  password: 
  { type: String, require: true },


  confirmPassword:
   { type: String, require: true },
}{
    timestamps: true
});


const User = mongoose.model("User", userSchema);
export default User; 
