define(['lib/utils/appFunc', 'hbs!js/view/register/register'], function(appFunc, registerView) {
    var $ = Framework7.$;
 
    var viewRegister = {
        render : function (params) {
            
            $('.register-left').text(params.idioma.page_back);
            $('.register-header').text(params.idioma.page_name);
            $('.register-right').text(params.idioma.siguiente);
            $('.register-page').html(registerView({ idioma: params.idioma }));
            $('.item-central').html("<u>" + params.idioma.have_account + "</u>");
            appFunc.bindEvents(params.bindings);
        },
        descripcion_genero : function(){
            var dataOption = null;
            var desc_genero = null;
            desc_genero = $("#cod_genero [value='" + $("#cod_genero").val() + "']").text();
            dataOption = { desc_genero : desc_genero};
            return dataOption;
        }
    };
    
    return viewRegister;
});  