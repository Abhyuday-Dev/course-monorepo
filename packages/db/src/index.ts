
import mongoose from "mongoose";

//Admin Schema

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});

//User Schema

const UserSchema=new mongoose.Schema({
    username: {type:String},
    password: String,
    purchasedCourses:[{type:mongoose.Schema.Types.ObjectId,ref:'Course'}]
});


//Course Schema

const CourseSchema=new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    imageLink:String,
    published:Boolean,
});

export const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
export const User = mongoose.models.User || mongoose.model('User', UserSchema);
export const Course= mongoose.models.Course || mongoose.model('Course', CourseSchema);