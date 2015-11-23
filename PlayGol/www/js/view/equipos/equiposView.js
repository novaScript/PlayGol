define(['lib/utils/appFunc', 'hbs!js/view/equipos/equipos'], function (appFunc, equiposView) {
    var $ = Framework7.$;

    var vista_equipos = {
        render: function (params) {
            $('.equipos-left').text(params.idioma.page_back);
            $('.equipos-right').text(params.idioma.done);
            $('.equipos-header').text(params.idioma.page_name);
            $('.equipos-page').html(equiposView({ idioma: params.idioma }));
            appFunc.showToolbar();
            appFunc.bindEvents(params.bindings);
        }
    };

    return vista_equipos;

});