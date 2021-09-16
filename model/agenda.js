module.exports={
    obtenerDatos: async function(conexion, id,funcion){
        console.log("°°°°  ID FROM MODELS:   ",id)
        conexion.query("SELECT * FROM duties WHERE id_user = ?; SELECT * FROM memos WHERE id_user = ?",[id, id], funcion);
     },
     obtenerMemos: async (conexion, id, funcion)=>{
      console.log("°°°°  ID FROM MODELS MEMOS:   ",id)
        conexion.query("SELECT * FROM memos WHERE id_user = ?",id, funcion);
     },
     saveMemo: async(conexion,id)=>{
       
     }
}