const mongoose, {Schema} = require("mongoose");


export const UserSchema = new Schema({
    name: String,
    title: String,
    department: String,
    joined: Date
})

const User = mongoose.model("user", UserSchema)

export default User