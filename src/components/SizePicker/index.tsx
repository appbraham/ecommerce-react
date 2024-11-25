import { useState } from "react";

interface Size {
    sizes: string[];
    sendSize: (size: string) => void;
}

const SizePicker = ( {sizes, sendSize}: Size ) => {


    const [currentSize, setCurrentSize] = useState("Small");

    const handleRadioChange = (size: string) => {
        setCurrentSize(size);
    }
    
    sendSize(currentSize);

  return (
    <div className="flex justify-between items-center gap-x-3 gap-y-8 flex-wrap sm:justify-start">
        {
            sizes.map( (size, index) => (
                <label key={index} htmlFor={size}>
                    <input className="peer hidden" type="radio" name="sizes" id={size} checked={currentSize===size} onChange={() => handleRadioChange(size)} />
                    <span className="peer-checked:bg-black peer-checked:text-white bg-gray-200 text-sm text-black/60 font-medium rounded-full px-5 py-3 hover:cursor-pointer">{size}</span>
                </label>
            ))
        }
    </div>
  )
}

export default SizePicker