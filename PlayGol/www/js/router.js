define(['confi', 'lib/utils/appFunc'],function(confi, appFunc){
    var $ = Framework7.$;
    window.router = {
        init: function() {
            if(!confi.isLogin()){
                //mainView.loadPage('js/pages/login/login.html');
                mainView.loadPage('js/pages/equipos/equipos.html');
            }else{
                //router.load("lista", null);
                //mainView.loadPage('js/pages/equipos/equipos.html');
            }
            
            $(document).on('pageBeforeInit', function (e) {
                var page = e.detail.page;
                router.pageBeforeInit(page);
            });

            $(document).on('pageAfterAnimation', function (e) {
                var page = e.detail.page;
                router.pageAfterAnimation(page);
            });
        },

        pageAfterAnimation: function(page){
            var name = page.name;
            switch (name) {
                case 'login':
                    appFunc.hideToolbar();
                    page.view.params.swipeBackPage = false;
                    break;
                case 'idioma':
                    appFunc.hideToolbar();
                    break;
                default: 
                    appFunc.showToolbar();
                    page.view.params.swipeBackPage = true;
                    break;
            }
        },
        pageBeforeInit: function(page) {
            var name = page.name;
            var query = page.query;
            switch (name) {
            case 'login':
                router.load(name, query);
                break;    
            case 'lista':
                router.load(name, query);
                break;
            case 'contact':
                router.load(name, query);
                break;
            case 'idioma':
                router.load(name, query);
                break;
            case 'register':
                router.load(name, query);
                break;
            case 'register_correo':
                router.load(name, query);
                break;
            case 'registerLocation':
                router.load(name, query);
                break;
           case 'equipos':
                router.load(name, query);
                break;
            }
            
        },
        load: function (controllerName, query) {
            require(['js/controller/' + controllerName + '/' + controllerName + 'Controller'], function (controller) {
                controller.init(query);
            });
        }

    };
    
    return router;
}); 