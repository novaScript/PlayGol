var lang = localStorage.getItem('idiomaPlayGol') || 'es-co';
 require.config({
    locale: lang,
    paths: {
        handlebars: "lib/utils/handlebars",
        text: "lib/utils/text",
        hbs: "lib/utils/hbs",
        confi: "js/servicios/configuracionSession",
        i18n: "lib/utils/i18n"
    },
    shim: {
        handlebars: {
            exports: "Handlebars"
        }
    }
});

define('app', ['js/router', 'i18n!nls/lang', 'lib/utils/appFunc'], function(Router, i18n, appFunc) {
    
    var templateBack = '<div class="left sliding">\n\
                            <a href="#" class="back link">\n\
                                <i class="icon icon-back color-white"></i>\n\
                                    <span>{{backText}}</span>\n\
                            </a>\n\
                        </div>'; 
        
    var app = {
            initialize: function() {
                this.bindEvents();
            },
            bindEvents: function() {
                if(appFunc.isPhonegap()) {
                    document.addEventListener('deviceready', this.onDeviceReady, false);
                }else{
                    window.onload = this.onDeviceReady();
                }
            },
            onDeviceReady: function() {
                app.receivedEvent('deviceready');
            },
            receivedEvent: function(event) {
                switch (event) {
                    case 'deviceready':
                        app.initMainView();
                        break;
                }
            },
            initMainView:function(){
                 window.appPlayGol = new Framework7({
                    modalTitle: i18n.global.modal_title,
                    pushState: false,
                    popupCloseByOutside:false,
                    animateNavBackIcon: true,
                    modalButtonOk: i18n.global.modal_button_ok,
                    modalButtonCancel: i18n.global.cancel,
                    smartSelectBackOnSelect : true,
                    smartSelectBackText : i18n.global.back,
                    smartSelectPopupCloseText : i18n.global.close,
                    smartSelectBackTemplate : templateBack
                });

                window.mainView = appPlayGol.addView('.view-main', {
                    dynamicNavbar: true
                });
                                
                Router.init();
            }
        };
        app.initialize();
}); 
