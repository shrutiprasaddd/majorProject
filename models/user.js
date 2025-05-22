const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose); //automatically creates a username and hashed passwd and salt value

module.exports = mongoose.model("User", userSchema);