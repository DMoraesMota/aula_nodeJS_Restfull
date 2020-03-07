module.exports = {

    product: (app, req, res) => {

        req.assert('name','O Nome é obrigatório').notEmpty();
        req.assert('ID','O ID é uma informação obrigatória').notEmpty();

        let errors = req.validationErrors();

        if (errors){

            app.utils.error.send(errors, req, res);                
            return false;            
            
        } else {

            return true;

        }
    }

}