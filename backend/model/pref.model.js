const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const schemaPreferencia = new mongoose.Schema(
  {
    nombre: String,
    icon: String,
    subpref: [{ type: Schema.Types.ObjectId, ref: 'subprefs' }],
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const schemaSubPref = new mongoose.Schema(
  {
    nombre: String,
    icon: String,
    ref_id: { type: Schema.Types.ObjectId, ref: 'preferencia' },
    except: [{ type: Schema.Types.ObjectId, ref: 'GruposAlimenticio' }],
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



const SubPrefe = mongoose.model("subprefs", schemaSubPref);
module.exports.SubPrefe = SubPrefe;
module.exports.schemaSubPref = schemaSubPref; 



const Preferencia = mongoose.model("preferencia", schemaPreferencia);
module.exports.Preferencia = Preferencia;
module.exports.schemaPreferencia = schemaPreferencia;
