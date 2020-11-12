const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaPrefUser = new mongoose.Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'user' },
    pref1: [{ type: Schema.Types.ObjectId, ref: 'preferencia' }],
    pref2: [{ type: Schema.Types.ObjectId, ref: 'subprefs' }],
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



const PrefUser = mongoose.model("prefu", schemaPrefUser);
module.exports.PrefUser = PrefUser;
module.exports.schemaPrefUser = schemaPrefUser;



