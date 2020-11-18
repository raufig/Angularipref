const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const schemaMenuRest = new mongoose.Schema(
  {
    rest_id: { type: Schema.Types.ObjectId, ref: 'rest' },
    Platos: [{ type: Schema.Types.ObjectId, ref: 'plato' }],
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);





const MenuResta = mongoose.model("menuResta", schemaMenuRest);
module.exports.MenuResta = MenuResta;
module.exports.schemaMenuRest = schemaMenuRest; 
