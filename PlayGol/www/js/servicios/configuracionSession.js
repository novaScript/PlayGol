define([], function() {
    var CONFIG = null;

    var globalService = {

        init: function(){
            if (!CONFIG) {
                CONFIG = {};
                CONFIG.currentUser = {};
                if (localStorage.getItem('idPlayGol')) {
                    CONFIG.currentUser.idPlayGol = localStorage.getItem('idPlayGol');
                }
                if(localStorage.getItem('userPlayGol')){
                    CONFIG.currentUser = JSON.parse(localStorage.getItem('userPlayGol'));
                }
            }
        },

        getCurrentUser: function(){
            return CONFIG.currentUser;
        },

        getSid: function(){
            var m = $$.parseUrlQuery(window.location.href || '');
            return m.idPlayGol || localStorage.getItem('idPlayGol');
        },

        setCurrentUser: function(idPlayGol,usSerPlayGol){
            CONFIG.currentUser = usSerPlayGol;
            localStorage.setItem('userPlayGol',JSON.stringify(usSerPlayGol));
            localStorage.setItem('idPlayGol',idPlayGol);
        },

        removeCurrentUser: function(){
            CONFIG.currentUser = {};
            localStorage.removeItem('userPlayGol');
            localStorage.removeItem('idPlayGol');
        },

        isLogin: function(){
            return (CONFIG.currentUser && localStorage.getItem('idPlayGol'));
        },
        
        setLocalStorage: function(llave, data){
            localStorage.setItem(llave,JSON.stringify(data));
        },
        getLocalStorage : function (llave){
            return localStorage.getItem(llave);
        },
        removeLocalStorage: function (llave){
            localStorage.removeItem(llave);
        }

    };

    globalService.init();

    return globalService;
});
