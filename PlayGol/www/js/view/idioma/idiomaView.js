define(['lib/utils/appFunc', 'hbs!js/view/idioma/idioma'], function (appFunc, loginView) {
    var $ = Framework7.$;
    
    var vista_idioma = {
        render : function(params) {
            $('.idioma-left').text(params.idioma.page_back);
            $('.idioma-right').text(params.idioma.done);
            $('.idioma-header').text(params.idioma.page_name);
            $('.idioma-page').html(loginView({ idioma: params.idioma }));
            $('.idioma-page .language-radio[data-lang="' + params.idiomaPorDefecto + '"]').attr('checked','checked');
            appFunc.hideToolbar();
            appFunc.bindEvents(params.bindings);
        },
        radio_chequeado : function(lang){
            return $('.idioma-page .language-radio:checked').data(lang);
        }
    };
    
    return vista_idioma;
 
});  