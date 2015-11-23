define(["js/view/equipos/equiposView", "js/model/equipos/equiposModel"], function (equiposView, equiposModel) {
    var idioma = null;
    var equipo = null;

    equipo = new equiposModel();
    idioma = equipo.cargarIdioma();

    var $ = Framework7.$;
    var controllerEquipos = {
        init: function () {
            
            equiposView.render({
                idioma: idioma
            });
        }
    };
    return controllerEquipos;
});
