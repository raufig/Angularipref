const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const schemaRest = new mongoose.Schema({
  nit: String,
  name: String,
  email: {type: String, required: true},
  raSocial: String,
  addr: String,
  phone: String,
  passw: {type: String, required: true},
  restId: String,
},{
  timestamps: true
});
schemaRest.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      nit: this.nit,
      name: this.name,
      email: this.email,
    },
    "passw"
  );
};
const Rest = mongoose.model("rest", schemaRest);
module.exports.Rest = Rest;
module.exports.schemaRest = schemaRest;
