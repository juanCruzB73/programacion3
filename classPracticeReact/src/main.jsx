import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GuessTheNumberApp from './components/GuessTheNumberApp.jsx'
import './index.css'
import { DisplayColorsApp } from './components/DisplayColorsApp.jsx'
import Timer from './components/Timer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2>Ejercicio 1 adivinar el numero</h2>
    <GuessTheNumberApp />
    <h2>Ejercicio 2 cambiar colores</h2>
    <DisplayColorsApp/>
    <h2>Ejercicio 3 temporizador</h2>
    <Timer/>
  </StrictMode>
)
