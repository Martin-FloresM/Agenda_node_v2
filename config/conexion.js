var mysql = require("mysql");
var con= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jj-1026596645',
    database: 'agenda',
    multipleStatements: true
});

con.connect(
    (err)=>{
        if(!err){
            console.log(' ~~~~ Conexion a DB establecida!! ~~~~~~');
        }else{
            console.log('Error de conexion a DB');
        }
    }
);

module.exports=con; //exporta lavariable de conexion