const userCtrl = {};

const { User } = require("../model/user.model");
const { Preferencia } = require("../model/pref.model");
const { SubPrefe } = require("../model/pref.model");
const { PrefUser } = require("../model/prefU.model");
//import restaurantes
const { Rest } = require("../model/rest.model");
const { Platos } = require("../model/platos.model");
const { Orden } = require("../model/ordenes.model");


userCtrl.createUser = async (req, res) => {
  let newUser = await User.findOne({ email: req.body.email });
  if (newUser)
    return res.status(400).send("enable user registration already exist!!!");
  newUser = new User(req.body);
  const result = await newUser.save();
  const jwtToken = newUser.generateJWT();
  res.status(200).send({ jwtToken });
};
userCtrl.authUser = async (req, res) => {
  const authUser = await User.findOne({ email: req.body.email });
  if (!authUser) return res.status(400).send("invalid password or email");
  if (authUser.passw !== req.body.passw)
    return res.status(400).send("invalid password or email");
  const jwtToken = authUser.generateJWT();
  res.status(200).send({ jwtToken });
};
userCtrl.firstLogInUser = async (req, res) => {
  let pref = await Preferencia.find().populate({ path: "subpref" });

  res.status(200).send(pref);
};
userCtrl.test = async (req, res) => {
  console.log(req.user)
  const pref = await Preferencia.find({
    subpref: { _id: "5fad2ff63165585fb8d00fb2" },
  });
  console.log(
    `El objeto de preferencias fue \n ${JSON.stringify(pref, null, 4)}`
  );
  /* let pref = await Preferencia.findById("5fad2ff63165585fb8d00fc0").populate({path: 'subpref'}); */
  res.status(200).send(pref);
};
userCtrl.savePref = async (req, res) => {
  //console.log(req.body);

  const user = req.user._id;

  if (!user) {
    return res.status(400).send("usuario no existe en DB");
  } else {
    const user2 = req.user._id;
    
    const prefUser = new PrefUser({
      user_id: user2,
      pref1: req.body.pref1,
      pref2: req.body.pref2,
      except: req.body.except,
    });
    const result = await prefUser.save();
    res.status(200).send(result);
  }
};
userCtrl.getRest = async (req, res) => {
  const rests = await Rest.find().select('name addr img');
  res.status(200).send(rests);
};
userCtrl.getMenuRest = async (req, res) => {
  let userB =  await PrefUser.findOne({user_id: req.user._id}).select('except -_id')
  let abc= userB.toObject()
  let tmp = Object.values(abc.except)
  //console.log(tmp) 
  let tmp2 = ["5fa76098c40c7c5219db5c06"]//, "5fa76098c40c7c5219db5c07" 
  const platos = await Platos.find({rest_id: req.params.rest_id, gruposAliment: {$nin:tmp}})//.$where("gruposAliment").nin({ gruposAliment: "5fa76098c40c7c5219db5c06"})
  
  res.status(200).send(platos)
};

userCtrl.createOrder = async (req, res) =>{

  const newOrder = new Orden({
    user_id: req.user._id,
    user_name: req.user.name,
    rest_id: req.body.rest_id,
    nombre_plato: req.body.nombre_plato,
    descrip_plato: req.body.descrip_plato,
    cantidad:req.body.contidad,
    total_orden:req.body.total_orden,
  });
   const result = await newOrder.save();
   res.status(200).send(result);
   
 }

userCtrl.getInfoUser = async (req, res) =>{
  let infoUser = await User.find({_id: req.user._id})
  res.status(200).send(infoUser)
}

userCtrl.editInfoUser = async (req, res) =>{
  const url = req.protocol + "://" + req.get("host");
  const {docu, nombre, lastN, email, addr, phone, passw, birtDate } = req.body
  let imgRoute = null;
    if (req.file.filename) {
      imgRoute = url + "/public/" + req.file.filename;
    } else {
      imgRoute = null;
    }
    const updateUser = await User.findByIdAndUpdate(
      req.user._id, 
      {docu, nombre, lastN, email, addr, phone, passw, birtDate, img:imgRoute },
      {
        new: true, //siempre poner para mostrar updates
      }
    );
    if (!updateUser) return res.status(400).send("error en la informacion");
    //si se realizo un uptdate a alguna actividad
    res.status(200).send(updateUser);
}



module.exports = userCtrl;
