import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../context";

const AddCart = () => {

  const context = useContext(ShoppingCartContext)

  const [count, setCount] = useState<number>(1);

  const validCount = (evalCount:number) => {
    if(evalCount < 1){
      return 1;      
    }
    return evalCount;
  }

  const addOneToCounter = (plus:boolean) => {
    if(!plus){
      return setCount(validCount(count - 1));
    }else {
      return setCount(validCount(count + 1));
    }  
  }

  return (
    <div className="flex gap-6 my-2 md:flex-col lg:flex-row">
        <div className="flex items-center justify-between gap-6 bg-gray-200 px-4 py-1 rounded-full md:justify-evenly lg:justify-between">
            <button onClick={() => addOneToCounter(false)} className="size-10 rounded-full transition-colors duration-200 hover:bg-gray-400 active:bg-gray-300">
                <svg className="mx-auto" width="20" height="4" viewBox="0 0 20 4" fill="none"><path d="M19.375 2a1.125 1.125 0 0 1-1.125 1.125H1.75a1.125 1.125 0 0 1 0-2.25h16.5A1.125 1.125 0 0 1 19.375 2Z" fill="black"/></svg>
            </button>
            <span className="w-5">{count}</span>
            <button onClick={() => addOneToCounter(true)} className="size-10 rounded-full transition-colors duration-200 hover:bg-gray-400 active:bg-gray-300">
                <svg className="mx-auto" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M19.375 10a1.125 1.125 0 0 1-1.125 1.125h-7.125v7.125a1.125 1.125 0 1 1-2.25 0v-7.125H1.75a1.125 1.125 0 1 1 0-2.25h7.125V1.75a1.125 1.125 0 0 1 2.25 0v7.125h7.125A1.125 1.125 0 0 1 19.375 10Z" fill="black"/></svg>
            </button>
        </div>
        <button onClick={() => context.setCount(count)} className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 hover:ring hover:ring-gray-500 active:bg-gray-500">Add to Cart</button>
    </div>
  )
}

export default AddCart