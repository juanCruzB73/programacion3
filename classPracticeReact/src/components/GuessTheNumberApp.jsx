import { useGuessTheNumber } from '../hooks/useGuessTheNumber'

function GuessTheNumberApp() {
  
  const {onSubmit,onInputChange,resetGame,inputValue,messaje}=useGuessTheNumber();
  
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="number" placeholder="ingrese su numero" onChange={ onInputChange} value={inputValue}/>  
        <p>{messaje}</p>
      </form>      
      <button onClick={resetGame} >reiniciar numero</button> 
    </>
  )
}

export default GuessTheNumberApp
