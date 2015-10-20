define(["js/view/register/registerView", "js/model/register/registerModel"], function (registerView, registerModel) {

    var register = null;
    var idioma = null;
    
    var controllerRegister = {
        init : function() {
            register = new registerModel();
            idioma = register.cargarIdioma();
            
            var bindings = [{
                element:'.register-right',
                event: 'click',
                handler: controllerRegister.validarCampos
            },
            {
                element:'.item-central',
                event: 'click',
                handler: controllerRegister.yatieneunacuenta
            }];
        
            registerView.render({
                idioma : idioma,
                bindings: bindings
            });
        },
        validarCampos : function(){
            var formInput = appPlayGol.formToJSON('#frmRegister');
            register.setValues(formInput);
            var mensaje = register.validate();
            if (mensaje !== "") {
                appPlayGol.alert(mensaje);
                return;
            }
            register.setValuesLocalStorage(formInput, registerView.descripcion_genero());
            mainView.loadPage("js/pages/registerLocation/registerLocation.html");
        },
        yatieneunacuenta : function() {
            window.location.reload();
        }
    };
    return controllerRegister;
});
