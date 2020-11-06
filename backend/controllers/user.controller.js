const userCtrl = {};

const { User } = require("../model/user.model")


userCtrl.getUsers = async(req, res) => {
    const users = await User.find()
    res.json(users)
};
userCtrl.createUser = async (req, res) => {
    let newUser = await User.findOne ({email: req.body.email});
    if (newUser)
    return res.status(400).send("enable user registration already exist!!!");
    newUser = new User(req.body);
    const result = await newUser.save();
    const jwtToken = newUser.generateJWT();
    res.status(200).send({ jwtToken });
};
userCtrl.firstLogInUser = async (req, res) => {};
userCtrl.editUser = async (req, res) => {};
userCtrl.deleteUser = async (req, res) => {};

userCtrl.authUser = async (req, res) => {
    const authUser = await User.findOne({email: req.body.email});
    if (!authUser) return res.status(400).send("invalid password or email");
    if (authUser.passw !== req.body.passw)
    return res.status(400).send("invalid password or email");
    const jwtToken = authUser.generateJWT();
    res.status(200).send({ jwtToken });
};

module.exports = userCtrl;


