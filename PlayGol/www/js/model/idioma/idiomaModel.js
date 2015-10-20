define(['i18n!nls/lang'],function(i18n){
   
    function cargarIdioma(){
        var idioma = {
            appName : i18n.app.name,
            switch_language : i18n.global.switch_language,
            back : i18n.global.back,
            done : i18n.global.done,
            apply_changes: i18n.global.apply_changes,
            page_name : i18n.language.page_name,
            page_back : i18n.login.page_name
        };
        return idioma;
    }
    
    return {
        idioma: cargarIdioma
    };
     
});