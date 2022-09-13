const express = require('express');
const { connecter } = require('./bd/connect');
const routesUtilisateur = require("./route/utilisateur");
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use("/api/v1", routesUtilisateur);

app.get("/", (req, res) => {
    console.log('Salut les gars');
});

connecter("mongodb://127.0.0.1:27017/", (erreur) => {
    if(erreur){
        console.log("Erreur lors de la connexion avec la base de données");
        process.exit(-1)
    }else{
        console.log('Connexion avec la bdd établie');
        app.listen(3000);
        console.log('Atennte des requêtes au port 3000');
    }
})


