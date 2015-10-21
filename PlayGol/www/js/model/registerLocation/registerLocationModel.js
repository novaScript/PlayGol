define(['i18n!nls/lang', 'lib/utils/appFunc', 'lib/utils/xhr', 'lib/utils/md5.min', 'confi'], function(i18n, appFunc, xhr, md5, confi){   

    var idioma = {
        appName : i18n.app.name,
        page_name: i18n.registerLocation.page_name,
        department_placeholder: i18n.registerLocation.department_placeholder,
        city_placeholder: i18n.registerLocation.city_placeholder,
        page_back : i18n.register.page_name,
        siguiente : i18n.global.siguiente,
        back : i18n.global.back,
        select : i18n.global.select,
        cancel : i18n.global.cancel,
        search : i18n.global.search,
        loading_page : i18n.global.loading_page,
        err_department: i18n.registerLocation.err_department,
        err_city: i18n.registerLocation.err_city
    };
    
    function controllerRegisterLocation(){
        this.cboDepartamento;
        this.cboCiudad;
    }
    
    controllerRegisterLocation.prototype.cargarIdioma = function () {
        return idioma;
    };
    
    controllerRegisterLocation.prototype.validate = function () {
        var result = "";
        
        return result;
    };
    
    controllerRegisterLocation.prototype.setValues = function (formInput) {
        for(var field in formInput){
            if (this[field] !== undefined) {
                this[field] = formInput[field];
            }
        }
    };
    
    controllerRegisterLocation.prototype.cargarDepartamentos = function (callBack) {
        appPlayGol.showPreloader(idioma.loading_page);
        xhr.simpleCall({
            func: '',
            method: 'GET',
            url: "http://localhost:3000/api/data_residence/Colombia",
            data: {}
        }, function (response) {
            appPlayGol.hidePreloader();
            callBack(response);
        });
    };
    
    controllerRegisterLocation.prototype.cargarCiudades = function (codDepar, callBack) {
        appPlayGol.showPreloader(idioma.loading_page);
        xhr.simpleCall({
            func:'',
            method : 'GET',
            url: "http://localhost:3000/api/data_residence/Colombia/" + codDepar,
            data:{}
        },function(response){
            appPlayGol.hidePreloader();
            callBack(response);
        });
    };
    
    
    controllerRegisterLocation.prototype.setValuesLocalStorage = function (formInput, dataOpcion) {
        var registro = appPlayGol.formGetData('register');
        appFunc.addDataToObject(formInput, registro);
        appFunc.addDataToObject(dataOpcion, registro);
        appPlayGol.formStoreData('register',registro);
    };
    
    return controllerRegisterLocation;
    
});