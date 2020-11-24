const restCtrl = {};

const { Rest } = require("../model/rest.model")
const { Preferencia } = require("../model/pref.model");
const { SubPrefe } = require("../model/pref.model");
const { PrefRest } = require("../model/prefR.model");

const { GruposAliment } = require("../model/alimentos.model");
const { Ingrediente } = require("../model/alimentos.model");

const { PrefUser } = require("../model/prefU.model");

const { Platos } = require("../model/platos.model");
const { Orden } = require("../model/ordenes.model");

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

restCtrl.authRest = async (req, res) => {
    const authRest = await Rest.findOne({email: req.body.email});
    if (!authRest) return res.status(400).send("invalid password or email");
    if (authRest.passw !== req.body.passw)
    return res.status(400).send("invalid password or email");
    const jwtToken = authRest.generateJWT();
    res.status(200).send({ jwtToken });
};

restCtrl.firstLogInRest = async (req, res) => {
    let pref = await Preferencia.find().populate({ path: "subpref" });
  
    res.status(200).send(pref);
  };

  restCtrl.savePref = async (req, res) => {
    //console.log(req.body);
  
    const rest = req.rest._id;
    //console.log(rest)
  
    if (!rest) {
      return res.status(400).send("usuario no existe en DB");
    } else {
      const rest2 = req.rest._id;
  
      const prefRest = new PrefRest({
        rest_id: rest2,
        pref1: req.body.pref1,
        pref2: req.body.pref2,
      });
      const result = await prefRest.save();
      res.status(200).send(result);
    }
  };
  
  restCtrl.laMasPro = async (req, res) =>{

      let userB =  await PrefUser.findOne({user_id: req.rest._id}).select('except -_id')
      let abc= userB.toObject()
      let tmp = Object.values(abc.except)
      console.log(tmp) 

      
      let def = await GruposAliment.find().populate({path: "ingredientes"}).nor([{ _id: tmp }])
      console.log(def) 
      res.status(200).send(def);
  }

  restCtrl.getIngredientes = async (req, res)=>{
    let ingredientes = await Ingrediente.find()
    res.status(200).send(ingredientes)
  }
  restCtrl.createPlato = async (req, res) =>{
    const url = req.protocol + "://" + req.get("host");
    let newPlato = await Platos.findOne ({nombre: req.body.nombre});
    if (newPlato)
    res.status(400).send("Plato ya existe")
    let imgRoute = null;
    if (req.file.filename) {
      imgRoute = url + "/public/" + req.file.filename;
    } else {
      imgRoute = null;
    }
    
    newPlato = new Platos({
      rest_id: req.rest._id,
      nombre: req.body.nombre,
      categoria: req.body.categoria,
      descrip: req.body.descrip,
      tiempoPreparacion: req.body.tiempoPreparacion,
      ingredientesName: req.body.ingredientesName,
      ingredientes: req.body.ingredientes,
      gruposAliment: req.body.gruposAliment,
      precio: req.body.precio,
      img: imgRoute
    });
    const result = await newPlato.save();
    res.status(200).send("creado")
  }

  restCtrl.getPlatos = async (req, res) =>{
    const rests = await Platos.find({rest_id: req.rest._id})
    res.json(rests)
  }
  restCtrl.getPlato = async (req, res) =>{
    const plato = await Platos.findById(req.params._id)
    res.json(plato)
  }

  restCtrl.editPlato =  async (req, res) => {
    const {nombre, categoria, descrip, tiempoPreparacion, ingredientes, gruposAliment, precio, img } = req.body
    const UpdatePlato = await Platos.findByIdAndUpdate(
      req.params._id, 
      {nombre, categoria, descrip, tiempoPreparacion, ingredientes, gruposAliment, precio, img },
      {
        new: true, //siempre poner para mostrar updates
      }
    );
    if (!UpdatePlato) return res.status(400).send("error no hay plato");
    //si se realizo un uptdate a alguna actividad
    res.status(200).send(UpdatePlato);
  }

  restCtrl.deletePlato = async (req, res) =>{
    const deletePlato = await Platos.findByIdAndDelete(req.params._id);
    res.status(200).send({ message: "deleted" });
  }

  restCtrl.getInfoRest = async (req, res) =>{
    let infoUser = await User.find({_id: req.user._id})
    res.status(200).send(infoUser)
  }
  
  restCtrl.editInfoRest = async (req, res) =>{
    const url = req.protocol + "://" + req.get("host");
    const {nit, nombre, email, raSocial, addr, phone, passw, birtDate } = req.body
    let imgRoute = null;
      if (req.file.filename) {
        imgRoute = url + "/public/" + req.file.filename;
      } else {
        imgRoute = null;
      }
      const updateUser = await User.findByIdAndUpdate(
        req.user._id, 
        {nit, nombre, email, raSocial, addr, phone, passw, birtDate },
        {
          new: true, //siempre poner para mostrar updates
        }
      );
      if (!updateUser) return res.status(400).send("error en la informacion");
      //si se realizo un uptdate a alguna actividad
      res.status(200).send(updateUser);
  }

  restCtrl.getOrdenes = async (req, res) =>{
    const ordenes = await Orden.find({rest_id: req.rest._id})
    res.status(200).send(ordenes);
  }

module.exports = restCtrl;