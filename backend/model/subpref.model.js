/* const mongoose = require("mongoose");

const schemaSubPref = new mongoose.Schema(
  {
    nombre: String,
    icon: String,
    ref_id: [{ type: mongoose.Schema.Types.ObjectId, ref:'preferencia' }],
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



const SubPref = mongoose.model("subprefs", schemaSubPref);
module.exports.SubPref = SubPref;
module.exports.schemaSubPref = schemaSubPref; */