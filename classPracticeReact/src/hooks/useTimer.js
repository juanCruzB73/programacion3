import { useState,useEffect } from "react"
import { useGuessTheNumber } from './useGuessTheNumber';

const useTimer = () => {
  
    const [time,setTime]=useState(0);
    const {inputValue,onInputChange,setInputValue}=useGuessTheNumber();
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (time > 0 && isRunning) {
            const timerId = setTimeout(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearTimeout(timerId); // Cleanup timer on unmount or time change
        }
    }, [isRunning,time]);

    const stopTimer=()=>{
        setIsRunning(false);
    }

    const resumeTimer=()=>{
        setIsRunning(true);
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        const timeSeted=parseInt(inputValue)
        setTime(timeSeted)
        setIsRunning(true);
        setInputValue('')
    }
  
    return {
        time,
        onSubmit,
        onInputChange,
        inputValue,
        stopTimer,
        resumeTimer,
    }
}

export default useTimer
