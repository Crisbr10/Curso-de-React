import React,{ createContext, useContext,useState } from "react";

const primerContexto = createContext(null)

const Componente1 = () =>{

    const state=useContext(primerContexto)

    return(
        <>
            <h1> El token es {state.token} </h1>
            {/* Pintamos el componemte 2 */}
            <Componente2/>
        </>
    )
}

const Componente2 = () =>{
    const state=useContext(primerContexto)
    return(
        <>
            <h2>La sesión es {state.sesión}</h2>
        </>
    )
}

const Ejemplo3=()=>{
    const estadoInicial={
        token:1,
        sesión:"123456"
    }

    const[datosSesion,setDatosSesion]=useState(estadoInicial)

    function cambiarEstado(){
        setDatosSesion(
            {
                token:2,
                sesión:"UTF8"
            }
        )
    }
    
    return (
      <primerContexto.Provider value={datosSesion}>
        <Componente1/>
        <button onClick={cambiarEstado}>Hacer Cambios</button>
      </primerContexto.Provider>
    )
  
}

export default Ejemplo3