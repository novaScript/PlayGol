define(["js/view/registerLocation/registerLocationView", "js/model/registerLocation/registerLocationModel"], function (registerLocationView, registerLocationModel) {
   
    var registermodel = null;
    var idioma = null;
    
    var controllerRegisterLocation = {
        init : function() {
            
            registermodel = new registerLocationModel();
            idioma = registermodel.cargarIdioma();
            //change
            var bindings = [{
                element: '#departamento',
                event: 'change',
                handler: controllerRegisterLocation.cambiarDepartamento
            },
            {
                element:'.registerLocation-right',
                event: 'click',
                handler: controllerRegisterLocation.validarCampos
            }];
            
            
            registermodel.cargarDepartamentos(function (pdepar){
                registerLocationView.render({
                    idioma : idioma,
                    bindings: bindings,
                    data : pdepar
                });
            });
        },

        cambiarDepartamento : function(){
            var depar = registerLocationView.departamentoSeleccionado();
            registermodel.cargarCiudades(depar, function (pciudades){
                registerLocationView.cargarCiudades({
                    depar : depar,
                    idioma : idioma,
                    data : pciudades
                });
            });
        },

        validarCampos : function(){
            if (registerLocationView.departamentoSeleccionado() === "-1") {
                appPlayGol.alert(idioma.err_department);
                return;
            }
            
            if (registerLocationView.ciudadSeleccionado() === "-1") {
                appPlayGol.alert(idioma.err_city);
                return;
            }
            
            registermodel.setValuesLocalStorage(null, registerLocationView.descripcion_departamento());
            registermodel.setValuesLocalStorage(null, registerLocationView.descripcion_ciudad());
            registermodel.setValuesLocalStorage(null, registerLocationView.cod_ciudad());
            registermodel.setValuesLocalStorage(null, registerLocationView.cod_departamento());
            mainView.loadPage("js/pages/register_correo/register_correo.html");
        }
    };
    return controllerRegisterLocation;
});
