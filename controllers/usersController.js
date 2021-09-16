var conexion = require('../config/conexion');
var login = require('../model/login');
var bcryptjs = require('bcryptjs');
var borar = require('fs');
const agendaController = require("./agendaController");


module.exports={

    index: function(req, res) {
        res.render('./indexViews/index', { title: 'Login Here' });
    },
    auth: function(req, res) {
        console.log("datos HTML",req.body.email);
        if(req.body.email && req.body.password){
            login.auth(conexion, req.body, async (err, datos) => {
                if(!err){
                    if(datos.length == 0 || datos[0].password == 'undefined' || await datos[0].password != req.body.password ){
                        res.render('./indexViews/index', { title: 'Login Here' });
                    }else{
                        //console.log("Comparacion desde F auth",datos[0].password, "DIF", req.body.password);
                        console.log("VALIDACION EXITOSA°°°°°°");
                        //console.log("°°°° ID FROM AUTH:  ", datos[0].id_user);

                        req.session.loggedin = true;
                        req.session.id_user= datos[0].id_user;
                        res.redirect('/agenda/home');
                    };
                }
            });
        }
    },
    createAccount: function(req, res) {
        res.render('./indexViews/createAccount', { title: 'Create Account' });
    },
    guardar: function(req, res){
        var datos = req.body;
        
        // if(datos.password != datos.confPassword){
        //     //alert
        // }
        login.insetar(conexion, req.body, async (err)=> {
                if(!err){
                    res.render('./indexViews/index', { title: 'Login Here' }
                    );
                    // ,{
                    //     alert:true,
                    //     alertTitle:"Registro",
                    //     alertMessage: "Se ha registrado exitosamente!",
                    //     alertIcon: 'success',
                    //     showConfirmButton: false,
                    //     timer: 1500,
                    //     ruta:'./indexViews/index'
                    // });
                }else{
                    console.log(err);
                     res.redirect('/createUser');
                };
        });
    
    },
    Account: function(req, res) {
        res.render('./indexViews/Account', { title: 'Account' });
    },
    
}
