import Comments from "../Comments";

const Tab = () => {  

  return (
    <div className="relative flex flex-col">

        <div className="grid grid-cols-3 justify-evenly">
            <input type="radio" name="tabs" id="product" className="peer/product hidden"/>
            <label htmlFor="product" className="flex-1 text-center border-b-2 p-4 text-black/60 cursor-pointer peer-checked/product:text-black peer-checked/product:font-medium peer-checked/product:border-b-black md:text-xl">Product Details</label>
            
            <input type="radio" name="tabs" id="rating" className="peer/rating hidden" checked/>
            <label htmlFor="rating" className="flex-1 text-center border-b-2 p-4 text-black/60 cursor-pointer peer-checked/rating:text-black peer-checked/rating:font-medium peer-checked/rating:border-b-black md:text-xl">Rating & Reviews</label>

            <input type="radio" name="tabs" id="faq" className="peer/faq hidden"/>
            <label htmlFor="faq" className="flex-1 text-center border-b-2 p-4 text-black/60 cursor-pointer peer-checked/faq:text-black peer-checked/faq:font-medium peer-checked/faq:border-b-black md:text-xl">FAQs</label>

            <div className="col-span-3 flex flex-col justify-between my-8 md:flex-row">
                <div className="flex gap-2 items-center justify-center">
                    <span className="font-bold text-xl md:text-2xl">All Reviews</span>
                    <span className="text-black/60">(451)</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-4 items-center font-medium md:flex-nowrap md:mt-0">
                    <button className="group size-12 bg-gray-200 rounded-full grid place-content-center hover:bg-black hover:text-white">
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none"><path className="group-hover:fill-white" d="M12.125 9.625v8.625a1.125 1.125 0 1 1-2.25 0V9.625a1.125 1.125 0 0 1 2.25 0ZM17.75 16a1.125 1.125 0 0 0-1.125 1.125v1.125a1.125 1.125 0 1 0 2.25 0v-1.125A1.125 1.125 0 0 0 17.75 16ZM20 12.25h-1.125V1.75a1.125 1.125 0 1 0-2.25 0v10.5H15.5a1.125 1.125 0 1 0 0 2.25H20a1.125 1.125 0 1 0 0-2.25ZM4.25 13a1.125 1.125 0 0 0-1.125 1.125v4.125a1.125 1.125 0 0 0 2.25 0v-4.125A1.125 1.125 0 0 0 4.25 13ZM6.5 9.25H5.375v-7.5a1.125 1.125 0 0 0-2.25 0v7.5H2a1.125 1.125 0 0 0 0 2.25h4.5a1.125 1.125 0 1 0 0-2.25Zm6.75-4.5h-1.125v-3a1.125 1.125 0 1 0-2.25 0v3H8.75a1.125 1.125 0 0 0 0 2.25h4.5a1.125 1.125 0 0 0 0-2.25Z" fill="black"/></svg>
                    </button>
                    <button className="group h-12 px-5 bg-gray-200 rounded-full flex items-center gap-6 hover:bg-black hover:text-white">
                        <span>Latest</span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none"><path className="group-hover:fill-white" d="m11.53 1.53-5 5a.75.75 0 0 1-1.062 0l-5-5A.751.751 0 1 1 1.531.469L6 4.938l4.47-4.47a.751.751 0 0 1 1.062 1.062h-.001Z" fill="black"/></svg>
                    </button>
                    <button className="h-12 px-5 bg-gray-200 text-black rounded-full hover:bg-black hover:text-white">Write a Review</button>
                </div>
            </div>

            <div className="hidden col-span-3 peer-checked/product:block">
                <p>Product Detail</p>
            </div>

            <div className="hidden col-span-3 peer-checked/rating:block">
                <Comments />                
            </div>

            <div className="hidden col-span-3 peer-checked/faq:block">
                <p>Faqs</p>
            </div>
        </div>
    </div>
  )
}

export default Tab