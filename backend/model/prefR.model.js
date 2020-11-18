const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaPrefRest = new mongoose.Schema(
  {
    rest_id: { type: Schema.Types.ObjectId, ref: 'rest' },
    pref1: [{ type: Schema.Types.ObjectId, ref: 'preferencia' }],
    pref2: [{ type: Schema.Types.ObjectId, ref: 'subprefs' }],
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



const PrefRest = mongoose.model("prefr", schemaPrefRest);
module.exports.PrefRest = PrefRest;
module.exports.schemaPrefRest = schemaPrefRest;