const restCtrl = {};

const { Rest } = require("../model/rest.model")

restCtrl.getRests = async (req, res) => {
    const rests = await Rest.find()
    res.json(rests)
};
restCtrl.createRest = async (req, res) => {
    let newRest = await Rest.findOne ({email: req.body.email});
    if (newRest)
    return res.status(400).send("enable restaurant registration already exist!!!")
    newRest = new Rest(req.body);
    const result = await newRest.save();
    const jwtToken = newRest.generateJWT();
    res.status(200).send({ jwtToken });
};
restCtrl.getRest = async (req, res) => {};
restCtrl.editRest = async (req, res) => {};
restCtrl.deleteRest = async (req, res) => {};
restCtrl.authRest = async (req, res) => {
    const authRest = await Rest.findOne({email: req.body.email});
    if (!authRest) return res.status(400).send("invalid password or email");
    if (authRest.passw !== req.body.passw)
    return res.status(400).send("invalid password or email");
    const jwtToken = authRest.generateJWT();
    res.status(200).send({ jwtToken });
};

module.exports = restCtrl;