define(['i18n!nls/lang', 'lib/utils/appFunc', 'lib/utils/xhr', 'lib/utils/md5.min', 'confi'],
        function(i18n, appFunc, xhr, md5, confi){
    
    var idioma = {
        appName : i18n.app.name,
        page_name : i18n.register.page_name,
        name_placeholder : i18n.register.name_placeholder,
        last_name_placeholder : i18n.register.last_name_placeholder,
        gender_placeholder : i18n.register.gender_placeholder,
        birthday_placeholder : i18n.register.birthday_placeholder,
        male_placeholder : i18n.register.male_placeholder,
        famale_placeholder : i18n.register.famale_placeholder,
        page_back : i18n.login.page_name,
        siguiente : i18n.global.siguiente,
        err_name : i18n.register.err_name,
        err_last_name : i18n.register.err_last_name,
        err_birthday : i18n.register.err_birthday,
        err_gender : i18n.register.err_gender,
        have_account : i18n.login.have_account
    };
    
    function controllerRegister(){
        this.primer_nom = '';
        this.primer_ape = '';
        this.fecha_nacimiento = '';
        this.cod_genero = '';
        this.desc_genero = '';
    };
    
    controllerRegister.prototype.validate = function() {
        
        var result = "";
        if (!this.primer_nom) {
            result = idioma.err_name;
        }else if (!this.primer_ape){
            result = idioma.err_last_name;
        }else if (!this.fecha_nacimiento){
            result = idioma.err_birthday;
        }
        return result;
    };
    
    controllerRegister.prototype.setValues = function(formInput) {
        for(var field in formInput){
            if (this[field] !== undefined) {
                this[field] = formInput[field];
            }
        }
    };
    
   
    controllerRegister.prototype.setValuesLocalStorage = function(formInput, dataOpcion) {
        appFunc.addDataToObject(dataOpcion, formInput);
        appPlayGol.formStoreData('register',formInput);
    };
    
    controllerRegister.prototype.cargarIdioma = function(){
        return idioma;
    };
    
    return controllerRegister;
    
});