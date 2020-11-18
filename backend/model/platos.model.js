const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const schemaPlatos = new mongoose.Schema(
  {
    rest_id: { type: Schema.Types.ObjectId, ref: 'rest' },
    nombre: String,
    categoria: String,
    descrip: String,
    tiempoPreparacion: Number,
    ingredientes: [{ type: Schema.Types.ObjectId, ref: 'Ingrediente' }],
    gruposAliment: [{ type: Schema.Types.ObjectId, ref: 'GruposAlimenticio'  }],
    precio: Number,
    img: { type: String, default: "http://localhost:3000/public/1605630079235-recurso-12.png" },
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



const Platos = mongoose.model("plato", schemaPlatos);
module.exports.Platos = Platos;
module.exports.schemaPlatos = schemaPlatos;