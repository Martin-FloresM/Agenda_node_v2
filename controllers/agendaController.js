var conexion = require('../config/conexion');
var agenda = require('../model/agenda');
var borar = require('fs');
const login = require('../model/login');


module.exports={
   

    home: function(req, res) {
        if(req.session.loggedin){
            console.log("COOKIES:    ",req.session);
            let id = req.session.id_user;
            console.log("ID FORM HOME_F:    ", id);
            agenda.obtenerDatos(conexion, id,function(err, datos){
                if(!err){
                    
                    console.log("ESTOS SON MEMOS:", datos[1]);
                    console.log("ESTOS SON DUTIES: ",datos[0]);
                    // res.send("HOME VIEW")
                    res.render('../views/agendaViews/home', { loggedin: true, id:id, title: 'HOME',duties:datos[0], memos:datos[1]} );
                }else{
                    console.log(err);
                };
            });
        }else{
            res.redirect("/login",{login:false, id:"por favor registrese", title:'NOT LOGGED'});
        };
       

    },
    memos: (req, res)=>{
        console.log("COOKIES_memos:    ",req.session);
        // res.render('../views/agendaViews/memos',{login:true, title:"memos"});
        if(req.session.loggedin){
            let id = req.session.id_user;
            console.log("ID FORM MEMOS C:    ", id)
            agenda.obtenerMemos(conexion, id,function(err, datos){
                if(!err){
                    
                    console.log("MEMOS from ob_memos:", datos.length);
                    
                    // res.send("HOME VIEW")
                    res.render('../views/agendaViews/memos', { loggedin: true, id:id, title:'MEMOS', memos:datos} );
                }else{
                    console.log(err);
                };
            });
        }else{
            res.redirect("/login",{login:false, id:"por favor registrese", title:'NOT LOGGED'});
        };
    },
    crearMemo: (req, res)=>{
        console.log("COOKIES:    ",req.session);
        if(req.session.loggedin){
            let id = req.session.id_user;
            console.log("ID FORM CrearMemo_F:    ", id)
            res.render('../views/agendaViews/crearMemo',{login:true,title:'Crear memos'},id);
        }else{
            res.redirect("/login",{login:false, id:"por favor registrese", title:'NOT LOGGED'});
        };

        
        // res.send("CREAR MEMO");
    },
    guardarMemo:(req, res)=>{
        res.send("guardando");
    },

    logout: (req, res) => {
        req.session.destroy(()=>{
             res.redirect('/login');
        })
    }


}
