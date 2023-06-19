// Ejemplo de uso del Hook useState

import React,{ useState } from 'react';

const Ejemplo1 = ()=>{

    //Valor inicial para un contador
    const valorInicial=0;

    // Valor Inicial para una persona
    const personaInicial={
        nombre:"Cristhian",
        email:"borgescristhian1@gmail.com"
    }
    /**
     * Queremos que el valor inicail y persona inicial sean oarte del estado del componente y poder gestionar su cambio y
     * que este se vea reflejado en la vista del componente
     * */
    const [contador,setContador]=useState(valorInicial)
    const [persona,setPersona]=useState(personaInicial)
    
    /**
     * CREAMOS LAS FUNCIONES CON LAS QUE SE ACTUALIZARAN LOS ESTADOS DE LOS COMPONENTES
    */
    function cambiarContador(){
      setContador(contador+1)
    }
    function actualizarPersona(){
      setPersona(
        {
          nombre:"Laura",
          email:"laurita30@gmail.com"
        }
      )
    }
    
  return(
    <>
      <span>{contador}</span>
      <button onClick={cambiarContador}>sumar</button>
      <span>{`${persona.nombre} ${persona.email}`}</span>
      <button onClick={actualizarPersona}>Actuzar Persona</button>
    </>
  )
}

export default Ejemplo1