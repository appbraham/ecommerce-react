import Textfield from "../Textfield"

const Newsletter = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
        <div className="w-full flex flex-col justify-between gap-8 bg-black px-6 py-10 rounded-3xl md:flex-row md:gap-16 md:px-16">
            <h2 className="font-integral font-bold text-3xl text-white text-balance lg:text-[40px] lg:leading-[45px] lg:max-w-[550px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
            <div className="flex flex-col gap-4 items-center justify-between md:max-w-96 md:w-full">
                <Textfield label="Enter your email address" icon="email" />
                <button className="w-full font-medium rounded-full bg-white py-3 px-4 hover:bg-slate-600 hover:text-white hover:ring-2 hover:ring-gray-200">Subscribe to Newsletter</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter