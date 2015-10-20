define(['lib/utils/appFunc', 'hbs!js/view/login/login'], function(appFunc, loginView) {
    var $ = Framework7.$;
 
    function render(params) {
        $('.login-header').text(params.idioma.page_name);
        $('.login-page').html(loginView({ idioma: params.idioma }));
        
        appFunc.bindEvents(params.bindings);
        
    }
    
    return {
        render: render
    }
});  