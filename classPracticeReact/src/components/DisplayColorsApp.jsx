import { useDisplayColors } from "../hooks/useDisplayColors"

export const DisplayColorsApp = () => {

    const {color,generateJustOneColor}=useDisplayColors()

    return (
    <div style={{background:`${color}`}}>
        <h1>app de colores</h1>
        <button onClick={generateJustOneColor}>Cambiar color</button>
    </div>
  )
}