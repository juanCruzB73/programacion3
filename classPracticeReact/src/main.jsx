import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GuessTheNumberApp from './GuessTheNumberApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GuessTheNumberApp />
  </StrictMode>
)
