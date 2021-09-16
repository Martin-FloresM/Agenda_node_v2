var bcryptjs = require('bcryptjs');
module.exports={
    auth: async function(conexion,datos,funcion){
        conexion.query("SELECT * FROM users WHERE email = ?",datos.email, funcion);
        console.log("DATOS DESDE MODEL:  ",datos);
    },
    insetar: async function(conexion,datos,funcion){
            let passHash = datos.password;
            // let passHash = await bcryptjs.hash(datos.password,8);
            conexion.query("INSERT INTO users ( name, lastname, email, password) VALUES (?,?,?,?)",
            [datos.name , datos.lastname, datos.email,passHash],funcion);
            console.log("DATOS DESDE MODEL:  ",datos);
    }
}