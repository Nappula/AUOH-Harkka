const express = require('express');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');

const app = express();

const body_parser = require('body-parser');

const controller = require('./controller');

// npm init
// npm install express
// npm install mongoose
// npm install nodemon --save-dev
// npm run start-dev

app.use(body_parser.json()); //req.body.name
app.use(body_parser.urlencoded({
    extended: true
})); // material/id

app.use((req, res, next) => {
    console.log(req.method, ' ', req.path);
    next();
}); // GET /api/materials

//  GET /index.html
// -->  /public/index.html
app.use("/", express.static("public"));

// RESTful API
// CRUD OPERATIONS

//CREATE
app.post("/api/machining-parameter-sets", controller.api_post_machining_parameter_set);

//api.domain.com/materials
// READ
app.get("/api/machining-parameter-sets", controller.api_get_machining_parameter_sets);

// GET :id
app.get("/api/machining-parameter-set/:id", controller.api_get_machining_parameter_set);

// UPDATE
//app.patch korvaa vain tietyt kentät
//app.put korvaa koko tiedon
app.put("/api/machining-parameter-set/:id", controller.api_put_machining_parameter_set);

// DELETE
app.delete("/api/machining-parameter-set/:id", controller.api_delete_machining_parameter_set);

//Z3iHt3pRiZyWd1XF

const database_uri = "mongodb+srv://daUser:Z3iHt3pRiZyWd1XF@cluster0-ljddb.mongodb.net/test?retryWrites=true&w=majority";

//const database_uri = "mongodb+srv://daUser:Z3iHt3pRiZyWd1XF@cluster0-ljddb.mongodb.net/testikanta?retryWrites=true&w=majority";

mongoose.connect(database_uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log('database connected');
    app.listen(port);
}).catch(err => {
    console.log(err);
});


// HAE KAIKKI http://localhost:8080/api/machining-parameter-sets 
// LUO UUSI http://localhost:8080/api/machining-parameter-sets  {"_id":"5eb66a9d9a146906e05382bc","ToolName":"ToolName123","Material":"Material","CuttingSpeed":2,"FeedRate":3,"__v":0}
// HAE yksi http://localhost:8080/api/machining-parameter-set/<id>
// PUT http://localhost:8080/api/machining-parameter-set/<id>
// DELETE http://localhost:8080/api/machining-parameter-set/<id>