const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/iPref", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo conection OK"))
  .catch((error) => console.log("mongo conection: error"));
