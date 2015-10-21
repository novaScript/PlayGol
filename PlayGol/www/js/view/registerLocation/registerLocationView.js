define(['lib/utils/appFunc', 'hbs!js/view/registerLocation/registerLocation'], function (appFunc, registerLocationView) {
    var $ = Framework7.$;
 
    var viewRegisterLocation = {
        render : function(params) {
            $('.registerLocation-left').text(params.idioma.page_back);
            $('.registerLocation-header').text(params.idioma.page_name);
            $('.registerLocation-right').text(params.idioma.siguiente);
            $('.registerLocation-page').html(registerLocationView({ departamentos: params.data, idioma: params.idioma }));
            appFunc.bindEvents(params.bindings);
        },

        cargarCiudades : function (params){
            $('.lista-ciudades').html(registerLocationView({ idioma: null }));
            $('#ciudad').html(registerLocationView({ idioma: params.idioma, ciudades: params.data }));
            
        },

        departamentoSeleccionado: function(){
            return $('#departamento').val();
        },

        ciudadSeleccionado: function(){
            return $('#ciudad').val();
        },

    };
    
    return viewRegisterLocation;
    
});  