import useTimer from "../hooks/useTimer"

const Timer = () => {

    const {time,onSubmit,onInputChange,inputValue,stopTimer,resumeTimer}=useTimer()
    //<button>reiniciar numero</button> 
    return (
    <>
        <form onSubmit={onSubmit}>
            <h1>tiempo:{time}</h1>
            <input type="number" placeholder="ingrese el tiempo" onChange={ onInputChange} value={inputValue}/>  
        </form>      
        <button onClick={stopTimer}>parar</button>
        <button onClick={resumeTimer}>continuar</button>
    </>
  )
}

export default Timer
