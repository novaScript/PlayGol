define(['i18n!nls/lang', 'lib/utils/appFunc', 'lib/utils/xhr', 'lib/utils/md5.min', 'confi'],
        function(i18n, appFunc, xhr, md5, confi){

   var idioma = {
        appName: i18n.app.name,
        page_name: i18n.team.page_name,
        page_back: i18n.login.page_name,
        siguiente: i18n.global.siguiente,
        name_team: i18n.team.name_team,
        add_player: i18n.team.add_player,
        delete_player: i18n.team.delete_player,
        edit_player: i18n.team.edit_player
    };

   function cotrollerIdioma() {
       this.cod_usuario = '';
       this.clave = '';
   }
  
    cotrollerIdioma.prototype.cargarIdioma = function(){
        return idioma;
    };
    
    return cotrollerIdioma;
    
});