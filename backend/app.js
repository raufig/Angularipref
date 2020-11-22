const express = require("express");
const app = express();
const cors = require("cors")

app.set( 'port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/user", require('./routes/user.routes'))
app.use("/api/rest", require("./routes/rest.routes"))
app.use("/public", express.static("public"))
module.exports = app;



/*app.use("/api/rest", require("./routes/rest.routes")); */