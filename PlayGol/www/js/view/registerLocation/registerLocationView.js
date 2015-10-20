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
            $('#cod_ciudad').html(registerLocationView({ idioma: params.idioma, ciudades: params.data }));
            
        },
        departamentoSeleccionado: function(){
            return $('#cod_depar').val();
        },
        ciudadSeleccionado: function(){
            return $('#cod_ciudad').val();
        },
        descripcion_departamento : function(){
            var dataOption = null;
            var desc_depar = null;
            desc_depar = $("#cod_depar [value='" + $("#cod_depar").val() + "']").text();
            dataOption = { desc_depar : desc_depar};
            return dataOption;
        },
        descripcion_ciudad : function(){
            var dataOption = null;
            var desc_ciudad = null;
            desc_ciudad = $("#cod_ciudad [value='" + $("#cod_ciudad").val() + "']").text();
            dataOption = { desc_ciudad : desc_ciudad};
            return dataOption;
        },
        cod_departamento : function () {
            var dataOption = null;
            var cod_depar = null;
            cod_depar = $('#cod_depar').val();
            dataOption = { cod_depar : cod_depar};
            return dataOption;
        },
        cod_ciudad : function() {
            var dataOption = null;
            var cod_ciudad = null;
            cod_ciudad = $('#cod_ciudad').val();
            dataOption = { cod_ciudad : cod_ciudad};
            return dataOption;
        }
    };
    
    return viewRegisterLocation;
    
});  