import { useState,useEffect } from "react";

export const useGuessTheNumber=()=>{

    const [inputValue, setInputValue]=useState('');//CAMBIA EL VALOR DEL INPUT 
    const [selectedNumber,setSelected]=useState(Math.floor(Math.random()*100)+1);
    const [messaje, setMesagge]=useState('')//contine el texto a mostar para referecnia 

  //CAMBIA EL VALOR PARA QUE SE VEA MIENTRAS ESCRIBE
  const onInputChange=({target})=>{
    setInputValue(target.value)
  }
  //CAMBIA EL VALOR DEL GUESSED
  const onSubmit=(event)=>{
      event.preventDefault()
      const guessedNumber=parseInt(inputValue)
      onGuessedNumber(guessedNumber)
      setInputValue('')
  }
  //LOGICA PARA SAVER SI LO ADIVINO O AÑADIRLO A LA LISTA DE INTENTOS
  const onGuessedNumber=(guessedNumber)=>{
      if(guessedNumber>selectedNumber){
        setMesagge("es numero ingresado es mayor")
      }else if(guessedNumber<selectedNumber){
        setMesagge("el numero ingresado es menor")
      }else if(guessedNumber==selectedNumber){
        setMesagge(`coincidencia encontrada el numero era ${guessedNumber}`)
      }else{
        setMesagge('')
      }
  }
  const resetGame=(event)=>{
    event.preventDefault();
    setSelected( Math.floor(Math.random()*100)+1 )
    setMesagge('')
  }

  //cuando el botton para cambiar el valor se ingresa muestra la consola
  useEffect(()=>console.log(selectedNumber),[selectedNumber]) 
  
  return {
    onSubmit,
    onInputChange,
    resetGame,
    inputValue,
    messaje,
    setInputValue,
};
}