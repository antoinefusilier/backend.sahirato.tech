const { exist } = require('joi');


class ComponentController {
    // ComponentManagerMiddlewares
    cM;
    // component = {
    //     name: 'componentTest',
    //     path: 'component/testCreateComponent',
    //     code: 'let test = 1;'
    // }

    constructor(app){
        // Init of component
        let componentMiddlewares = require('./componentManagerMiddlewares');
        this.cM = new componentMiddlewares(app);
        app.set('views', this.cM.path().join(__dirname, './views'));

        app.get('/componentManager', async(req, res) => {
            
            res.render('componentManagerView');
            
        });
    }

    addComponent = async(component) => {
        // if (!this.componentMiddlewares.fs().scandir('components\\')) {
        this.cM.fs().mkdir(this.cM.path().join(__dirname,'../'+component.name), (err) =>        
            {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        // }
        // Writing folder of views
        this.cM.fs().mkdir(this.cM.path().join(__dirname,'../'+component.name+'/views'), (err) =>        
            {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        // Writing principal view component : views/componentTestView.ejs
        this.cM.fs().writeFile(
            'components/'
            + component.name +
            '/views/'+ component.name + 
            'View.ejs', 
            component.code.ejs,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        // Writing middlewares initialization component file :: MyComponentMiddlewares.js
        this.cM.fs().writeFile(
            'components/'
            + component.name +
            '/'+ component.name + 
            'Controller.js', 
            component.code.controller,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        // Writing controller component file ::
        this.cM.fs().writeFile(
            'components/'
            + component.name +
            '/'+ component.name + 
            'Controller.js', 
            component.code.controller,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        // Writing model component file ::
        this.cM.fs().writeFile(
            'components/'
            + component.name +
            '/'+ component.name + 
            'Model.js', 
            component.code.model,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
         // Writing model component file ::
        this.cM.fs().writeFile(
            'components/'
            + component.name +
            '/'+ component.name + 
            'Mongo.js', 
            component.code.mongo,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        // https://www.geeksforgeeks.org/node-js-fs-writefile-method/
        // Writing master component file ($COMPONENT_NAME.js) : component.js
        this.cM.fs().writeFile(
            'components/'
            + component.name +
            '/'+ component.name + 
            '.js', 
            component.code,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
        
        // component.ejs
        // this.cM.fs().mkdir(this.cM.path().join(__dirname,'../'+component.name+'/views'), (err) =>        
        //     {
        //         if (err){
        //             console.log(err);
        //             return;
        //         }
        //     });
        this.cM.fs().writeFile(
            'components/'
            + component.name +
            '/'+ component.name + 
            '.js', 
            component.code,
            (err) => {
                if (err){
                    console.log(err);
                    return;
                }
            }
        );
    }
    removeComponent = async(component) => {
        this.cM.fs().rmdir(this.cM.path().join(__dirname,'../'+component.name), (err) => {
            console.log('REMOVE A COMPONENT:: err',err);
        });
    }
}
module.exports = ComponentController;