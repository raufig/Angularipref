const app = require ("./app");
const db = require ("./database");

app.listen(app.get('port'), () => {
  console.log("excecute on port: " + app.get('port'));
});
