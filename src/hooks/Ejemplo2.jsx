import React,{ useEffect,useRef,useState } from 'react'

const Ejemplo2 = () => {
    const valorDeInicio=0
    const[ contador1,setContador1 ]=useState( valorDeInicio )
    const[ contador2,setContador2 ]=useState( valorDeInicio )

    function cambiarContador1(){
        setContador1(contador1+1)
    }
    function cambiarContador2(){
        setContador2(contador2+1)
    }
     
    /**
     * REFERENCIANDO UN ELEMENTO DEL DOCUMENTO EN LA VARIABLE DOM
     */
    let DOM=useRef()
    
    /**
     * ? CASO 1: EJECUTAR EL useEffect() SIEMPRE QUE HALLA UN CAMBIO EN ALGUN COMPONENTE DEL DOM
    
    useEffect(()=>{
        console.log("Ha habido un cambio en los componentes")
        console.log(DOM)
    })
    */

     /**
     * ? CASO 1: EJECUTAR EL useEffect() SIEMPRE QUE HALLA UN CAMBIO EN EL CONTADOR 1
     */
    useEffect(()=>{
        console.log("Ha habido un cambio en el CONTADOR 1")
        console.log(DOM)
    },[contador1])


    return (
        <div>
            <div>
            <h1>{contador1}</h1>
            <button onClick={cambiarContador1}> CAMBIAR 1 </button>
            </div>
            <div>
            <h1>{contador2}</h1>
            <button onClick={cambiarContador2}> CAMBIAR 2 </button>
            </div><br/>

            {/*ELEMENTO REFERENCIADO ANTERIORMENTE*/}
            <span ref={DOM}>SPAN REFERENCIADO (useRef)</span>
        </div>
    )
}

export default Ejemplo2