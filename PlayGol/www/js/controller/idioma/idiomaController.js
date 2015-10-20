define(["js/view/idioma/idiomaView", "js/model/idioma/idiomaModel"], function (idiomaView, idiomaModel) {
    var idioma;
    var $ = Framework7.$;
    var controllerIdioma = {
        init : function() {
            
            var bindings = [{
                element:'.cambiar-idioma',
                event: 'click',
                handler: controllerIdioma.switchLanguage
            }];
            
            this.idiomaPorDefecto();
            idioma = idiomaModel.idioma();    
            idiomaView.render({
                idioma : idioma,
                bindings : bindings,
                idiomaPorDefecto : controllerIdioma.idiomaPorDefecto()
            });
        },
        cargarIdioma: function(){
            return localStorage.getItem('idiomaPlayGol');
        },
        guardarIdioma: function(lang){
            localStorage.setItem('idiomaPlayGol',lang);
        },
        idiomaPorDefecto: function(){
            var lang = this.cargarIdioma();
            lang = lang || 'es-co';
            return lang;
        },
        switchLanguage: function(){
            var lang1 = controllerIdioma.cargarIdioma();
            var lang = idiomaView.radio_chequeado('lang');
            if(lang1 !== lang){
                appPlayGol.showPreloader(idioma.apply_changes);
                setTimeout(function(){
                    controllerIdioma.guardarIdioma(lang);
                    window.location.reload();
                    appPlayGol.hidePreloader();
                },1000);
            }
        }
    };
    return controllerIdioma;
});
