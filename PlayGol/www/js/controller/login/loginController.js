define(["js/view/login/loginView", "js/model/login/loginModel"], function (LoginView, LoginModel) {
    
    var login = null;
    var idioma = null;
    
    function init() {
        
        var bindings = [{
            element: '.login-submit',
            event: 'click',
            handler: loginSubmit
        }];
        
        login = new LoginModel();
        idioma = login.cargarIdioma();

        LoginView.render({
            idioma : idioma,
            bindings: bindings
        });
    }

    function loginSubmit() {
        /*falta hacer el login y hacer el diseno del la tabla*/
        /*
        var formInput = appPlayGol.formToJSON('#frmLogin');
        login.setValues(formInput);
        var mensaje = login.validate();
        if (mensaje !== "") {
            appPlayGol.alert(mensaje);
            return;
        }
        login.loguear();
        */
    }

    return {
        init: init
    };
});