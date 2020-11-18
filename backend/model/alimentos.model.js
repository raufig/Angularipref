const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const schemaGruposAliment = new mongoose.Schema(
  {
    nombre: String,
    ingredientes: [{ type: Schema.Types.ObjectId, ref: 'Ingrediente' }],
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const schemaIngrediente = new mongoose.Schema(
  {
    nombre: String,
    ref_id: { type: Schema.Types.ObjectId, ref: 'GruposAlimenticio' },
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



const GruposAliment = mongoose.model("GruposAlimenticio", schemaGruposAliment);
module.exports.GruposAliment = GruposAliment;
module.exports.schemaGruposAliment = schemaGruposAliment; 



const Ingrediente = mongoose.model("Ingrediente", schemaIngrediente);
module.exports.Ingrediente = Ingrediente;
module.exports.schemaIngrediente = schemaIngrediente;
