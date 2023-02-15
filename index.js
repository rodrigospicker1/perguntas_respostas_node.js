const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}))

app.get("/",(req, res) => {
    res.render("index");
});

app.get("/pergunta",(req, res) => {
    res.render("pergunta");
});

app.get("/salvar_pergunta",(req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido");
});

app.listen(8080, () => {console.log("App rodando!");});