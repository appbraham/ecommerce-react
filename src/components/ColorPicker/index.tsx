import { ICustomColor } from "../../types/customColor";
import { useState } from "react";

const ColorPicker = ( { colors, sendColor }:ICustomColor) => {

  const [currentColor, setCurrentColor] = useState<string>(colors[0]);

  const handleRadioChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(event.target.value);
    sendColor(event.target.value);
  }

  return (
    <div className="flex gap-4">
        
        {
            colors.map( (color, index) => {               

                return   (
                        <label key={index} htmlFor={index.toString()} style={{ backgroundColor:color }} className="relative size-12 rounded-full hover:cursor-pointer">
                            <input className="peer hidden" type="radio" name="color" id={index.toString()} value={color} onChange={handleRadioChange} checked={currentColor === color} />
                            <svg className="hidden peer-checked:block absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2" width="14" height="11" viewBox="0 0 14 11" fill="none"><path d="m13.53 2.03-8 8a.751.751 0 0 1-1.062 0l-3.5-3.5a.751.751 0 1 1 1.063-1.062L5 8.438 12.47.968a.751.751 0 0 1 1.062 1.063l-.001-.001Z" fill="white"/></svg>
                        </label>
                    )
                }
            )
        }
    </div>    
  )
}

export default ColorPicker