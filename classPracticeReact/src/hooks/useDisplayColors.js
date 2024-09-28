import { useState } from 'react'

export const useDisplayColors=()=>{
    const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    const [color,setColor]=useState('');

    function getCharacter(index) {
        return hexCharacters[index]
    }

    function generateJustOneColor(){
        let hexColorRep = "#"
        for (let index = 0; index < 6; index++){
            let randomPosition = Math.floor ( Math.random() * hexCharacters.length )
            hexColorRep += getCharacter( randomPosition )
        }
        setColor(hexColorRep.toString());
        console.log(color)
    }
    return{
        color,
        generateJustOneColor
    }
}