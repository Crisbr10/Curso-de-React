import React from "react";

const EstadoUsuario=(props)=>{
    if(props.estadoU===true){
        return <h1>Conectado</h1>
    }else{
        return <h1>Desconectado</h1>
    }
    
}


export default EstadoUsuario