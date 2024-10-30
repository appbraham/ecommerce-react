import { useState } from "react";
import { ICustomColor } from "../../types/customColor";

const ColorPicker = ( { colors }:ICustomColor) => {

  const [currentColor, setCurrentColor] = useState<string>(colors[0]);

  const handleRadioChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log("color seleccionado",event.target.value);    
    setCurrentColor(event.target.value)
  }

  return (
    <div className="flex gap-4">
        
        {
            colors.map( (color, index) => {               

                return   (
                        <label key={index} htmlFor={index.toString()} className={`bg-[${currentColor}] size-10 rounded-full ring`}>
                            <span>{color}</span>
                            <input type="radio" name="color" id={index.toString()} value={color} onChange={handleRadioChange} checked={currentColor === color} />
                        </label>
                    )
                }
            )
        }

        

        {/* <span className="size-10 bg-stone-700 rounded-full"></span>
        <span className="size-10 bg-lime-700 rounded-full"></span>
        <span className="size-10 bg-green-950 rounded-full"></span> */}
    </div>    
  )
}

export default ColorPicker