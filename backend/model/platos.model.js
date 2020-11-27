const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const schemaPlatos = new mongoose.Schema(
  {
    
    nombre: String,
    rest_id: { type: Schema.Types.ObjectId, ref: 'rest' },
    categoria: String,
    descrip: String,
    tiempoPreparacion: Number,
    ingredientesName: [{type: String, ref:'Ingrediente'}],
    ingredientes: [{ type: Schema.Types.ObjectId, ref: 'Ingrediente' }],
    gruposAliment: [{ type: Schema.Types.ObjectId, ref: 'GruposAlimenticio'  }],
    precio: Number,
    img: { type: String, default: "http://localhost:3000/public/1605630079235-recurso-12.png" },
    unidad:{type: Number, default: 1}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



const Platos = mongoose.model("plato", schemaPlatos);
module.exports.Platos = Platos;
module.exports.schemaPlatos = schemaPlatos;