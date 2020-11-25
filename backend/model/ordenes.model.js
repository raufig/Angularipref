const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaOrdenes = new mongoose.Schema(
    {
      user_id: { type: Schema.Types.ObjectId, ref: 'user' },
      user_name: { type: Schema.Types.String, ref: 'user' },
      rest_id: { type: Schema.Types.ObjectId, ref: 'rest' },
      estadoDeOrden: { type: String, default: "Recibido" },
      nombre_plato: [{ type: String, default: "plato" }],
      descrip_plato: [{ type: String, default: "plato" }],
      contidad: [{type: Number, default: 1}],
      total_orden: Number,

 
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  
  
  const Orden = mongoose.model("Ordene", schemaOrdenes);
  module.exports.Orden = Orden;
  module.exports.schemaOrdenes = schemaOrdenes; 