const userCtrl = {};

const { User } = require("../model/user.model");
const { Preferencia } = require("../model/pref.model");
const { SubPrefe } = require("../model/pref.model");
const { PrefUser } = require("../model/prefU.model");



userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
userCtrl.createUser = async (req, res) => {
  let newUser = await User.findOne({ email: req.body.email });
  if (newUser)
    return res.status(400).send("enable user registration already exist!!!");
  newUser = new User(req.body);
  const result = await newUser.save();
  const jwtToken = newUser.generateJWT();
  res.status(200).send({ jwtToken });
};
userCtrl.firstLogInUser = async (req, res) => {
  let pref = await Preferencia.find().populate({path: 'subpref'});
  res.json(pref)
};
userCtrl.savePref = async (req, res) => {
    
  const user = await User.findById(req.user._id);
  const pref = await Preferencia.find()
  const subPref = await SubPrefe.find()
  const prefUser = new PrefUser({
    user_id: user._id,
    pref1: pref._id,
    pref2: subPref._id
  })
  const result = await prefUser.save();  
  res.status(200).send(result);
};
userCtrl.deleteUser = async (req, res) => {};

userCtrl.authUser = async (req, res) => {
  const authUser = await User.findOne({ email: req.body.email });
  if (!authUser) return res.status(400).send("invalid password or email");
  if (authUser.passw !== req.body.passw)
    return res.status(400).send("invalid password or email");
  const jwtToken = authUser.generateJWT();
  res.status(200).send({ jwtToken });
};

module.exports = userCtrl;
