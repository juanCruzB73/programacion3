import { useState,useEffect } from 'react'
/*
ARREGLAR BOTON PARA REINICIAR EL JUEGO
*/
const selectedNumber=Math.floor(Math.random()*100)+1;
function GuessTheNumberApp() {
  
  const [inputValue, setInputValue]=useState('');//CAMBIA EL VALOR DEL INPUT 
  const [selectedNumber1,setSelected]=useState(selectedNumber);
  const [messaje, setMesagge]=useState('')//contine el texto a mostar para referecnia
  //CAMBIA EL VALOR PARA QUE SE VEA MIENTRAS ESCRIBE
  const onInputChange=({target})=>{
    setInputValue(target.value)
  }
  //CAMBIA EL VALOR DEL GUESSED
  const onSubmit=(event)=>{
      event.preventDefault();
      const guessedNumber=parseInt(inputValue)
      onGuessedNumber(guessedNumber)
      setInputValue('')
  }
  //LOGICA PARA SAVER SI LO ADIVINO O AÑADIRLO A LA LISTA DE INTENTOS
  const onGuessedNumber=(guessedNumber)=>{
      if(guessedNumber>selectedNumber1){
        setMesagge("es numero ingresado es mayor")
      }else if(guessedNumber<selectedNumber1){
        setMesagge("el numero ingresado es menor")
      }else{
        setMesagge(`coincidencia encontrada el numero era ${guessedNumber}`)
      }
  }
  //cambia el numero a adivinar
  const resetGame=(event)=>{
    event.preventDefault()
    const num=Math.floor(Math.random()*100)+1
    setSelected(num);
    setMesagge('')
  }
  useEffect(()=>console.log(selectedNumber1),[selectedNumber1])

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="number" placeholder="ingrese su numero" onChange={ onInputChange} value={inputValue}/>  
        <p>{messaje}</p>
        <button onClick={resetGame}>reiniciar numero</button>
      </form>      
    </>
  )
}

export default GuessTheNumberApp
