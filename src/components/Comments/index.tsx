import Rating from "../Rating"

const Comments = () => {
  return (
    <section className="max-w-[1440px] mx-auto my-16 px-4">
        <h2 className="font-integral font-bold text-3xl my-16 lg:text-5xl">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-6 items-center pb-4 overflow-x-auto">            
            
            <article className="bg-gray-100 min-w-80 flex flex-col gap-2 border-2 rounded-[20px] p-8 lg:min-w-[400px]">
                <Rating rating={4.1}/>
                <p className="flex items-center gap-2 font-bold text-base lg:text-xl"> 
                    <span>Sara M.</span>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M10 .83a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .83Zm4.28 8.03-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.061l1.72 1.72 4.72-4.72a.75.75 0 1 1 1.06 1.06Z" fill="#01AB31"/></svg>
                </p>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </article>
            <article className="bg-gray-100 min-w-80 flex flex-col gap-2 border-2 rounded-[20px] p-8 lg:min-w-[400px]">
                <Rating rating={4.1} />
                <p className="flex items-center gap-2 font-bold text-base lg:text-xl"> 
                    <span>Sara M.</span>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M10 .83a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .83Zm4.28 8.03-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.061l1.72 1.72 4.72-4.72a.75.75 0 1 1 1.06 1.06Z" fill="#01AB31"/></svg>
                </p>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </article>
            <article className="bg-gray-100 min-w-80 flex flex-col gap-2 border-2 rounded-[20px] p-8 lg:min-w-[400px]">
                <Rating rating={4.1} />
                <p className="flex items-center gap-2 font-bold text-base lg:text-xl"> 
                    <span>Sara M.</span>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M10 .83a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .83Zm4.28 8.03-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.061l1.72 1.72 4.72-4.72a.75.75 0 1 1 1.06 1.06Z" fill="#01AB31"/></svg>
                </p>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </article>
            <article className="bg-gray-100 min-w-80 flex flex-col gap-2 border-2 rounded-[20px] p-8 lg:min-w-[400px]">
                <Rating rating={4.1} />
                <p className="flex items-center gap-2 font-bold text-base lg:text-xl"> 
                    <span>Sara M.</span>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M10 .83a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .83Zm4.28 8.03-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.061l1.72 1.72 4.72-4.72a.75.75 0 1 1 1.06 1.06Z" fill="#01AB31"/></svg>
                </p>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </article>
            <article className="bg-gray-100 min-w-80 flex flex-col gap-2 border-2 rounded-[20px] p-8 lg:min-w-[400px]">
                <Rating rating={4.1} />
                <p className="flex items-center gap-2 font-bold text-base lg:text-xl"> 
                    <span>Sara M.</span>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M10 .83a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .83Zm4.28 8.03-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.061l1.72 1.72 4.72-4.72a.75.75 0 1 1 1.06 1.06Z" fill="#01AB31"/></svg>
                </p>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </article>
            
        </div>

    </section>
  )
}

export default Comments