define(['i18n!nls/lang', 'lib/utils/appFunc', 'lib/utils/xhr', 'lib/utils/md5.min', 'confi'],
        function(i18n, appFunc, xhr, md5, confi){
    
    var urllogin = "http://181.63.255.152:8080/servicios/ServiciosWeb/consumirServicioUsuario.php";
    
    var idioma = {
        appName : i18n.app.name,
        login_btn : i18n.login.login_btn,
        loginname_placeholder : i18n.login.loginname_placeholder,
        password_placeholder : i18n.login.password_placeholder,
        language : i18n.global.language,
        sign_up : i18n.login.sign_up,
        forgot_pwd : i18n.login.forgot_pwd,
        err_empty_input : i18n.login.err_empty_input,
        err_empty_input_email : i18n.login.err_empty_input_email,
        err_empty_input_pass : i18n.login.err_empty_input_pass,
        err_illegal_email : i18n.login.err_illegal_email,
        login : i18n.login.login,
        err_pass_length : i18n.login.err_pass_length,
        err_user_no_exist : i18n.login.err_user_no_exist,
        page_name : i18n.login.page_name
        
    };
   
    function cotrollerIdioma(){
        this.cod_usuario = '';
        this.clave = '';
    }
    
    cotrollerIdioma.prototype.setValues = function(formInput) {
        for(var field in formInput){
            if (this[field] !== undefined) {
                this[field] = formInput[field];
            }
        }
    };
    
    cotrollerIdioma.prototype.validate = function() {
        var result = "";
        if (!this.cod_usuario) {
            result = idioma.err_empty_input_email;
        }else if (!this.clave) {
            result = idioma.err_empty_input_pass;
        }else if (appFunc.isEmail(this.cod_usuario) === false){
            result = idioma.err_illegal_email;
        }else if(this.clave.length <= 5){
            result = idioma.err_pass_length;
        }
        return result;
    };
 
    cotrollerIdioma.prototype.loguear = function() {
          
          xhr.simpleCall({
            func:'',
            method : 'POST',
            url : urllogin,
            data:{
                opcion: "logueo",
                correo:this.cod_usuario,
                clave: md5(this.clave)
            }
        },function(response){
            
            appPlayGol.showPreloader(idioma.login);
            setTimeout(function(){
                if(response.err_code === "0"){
                    var login = response.data;
                    confi.setCurrentUser(login.SID,login.userPlayGol);
                    appFunc.showToolbar();
                    mainView.loadPage('index.html');
                    appPlayGol.hidePreloader();
                }else{
                    appPlayGol.hidePreloader();
                    appPlayGol.alert(idioma.err_user_no_exist);
                }
            },500);

        });
    };
 
    cotrollerIdioma.prototype.cargarIdioma = function(){
        return idioma;
    };
    
    return cotrollerIdioma;
    
});