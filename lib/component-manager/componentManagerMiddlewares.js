const fs = require('fs');
const bodyParser = require('body-parser');
// const fsExpres = require('fs-express');
const path = require('path');

class ComponentManager {
    app;
    middleswares;
    
    constructor(app) {
        this.app = app;
        this.components = [];
    }
    fs = () => {
        return fs;
    }
    path = () => {
        return path;
    }
    // $ npm install body-parser --save
    // Le middleware body-parser est un analyseur de corps qui analyse le corps de toutes les requêtes entrantes et recherche les données de formulaire et les ajoute à l'objet req.body.
    // Cela permet de récupérer les données du formulaire dans le corps de la requête POST.
    bodyParser = () => {
        
    }
    try {
        // bodyParse.urlencoded :: Analyse les données de formulaire codées en URL (c'est-à-dire les données provenant de formulaires HTML) Option extended :: false :: Utilise la bibliothèque de codage de querystring Node.js. true :: Utilise la bibliothèque qs de codeur de querystring.
        app.use(bodyParser.urlencoded({ extended: true }));
        // bodyParse.json :: Analyse les données JSON et les ajoute à l'objet req.body.
        app.use(bodyParser.json());
        console.log('middlewares > init(app) > try_success > BodyParser is loaded');	
    } catch (err) {
        throw new Error('%ERROR% --> middlewares > init(app) ? catch(err) > Erreur dans le middleware "bodyParser" : ', err);
    }
    // fsExpres = () => {
    //     return fsExpres(this.app);
    // }

}
module.exports = ComponentManager;