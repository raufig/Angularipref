const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const schemaUser = new mongoose.Schema(
  {
    docu: String,
    name: String,
    lastN: String,
    email: { type: String, required: true },
    addr: String,
    phone: String,
    passw: { type: String, required: true },
    birDate: { type: String},
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


schemaUser.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      docu: this.docu,
      name: this.name,
      email: this.email,
    },
    "passw"
  );
};

// schemaUser.pre('save', async function(next){
//   if (!this.isModified('passw')) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.passw = await bcrypt.hash(this.passw, salt);
//   next();
// });

// schemaUser.methods.matchPassword = async function (enteredPassword) {
//   console.log(enteredPassword);
//   return await bcrypt.compare(enteredPassword, this.passw);
// };

const User = mongoose.model("user", schemaUser);

module.exports.User = User;
module.exports.schemaUser = schemaUser;
