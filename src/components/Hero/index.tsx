import Button from "../Button"
import Counter from "../Counter"
import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="bg-gray-200 flex flex-col items-center px-4">
      <div className="max-w-[1440px] flex flex-col gap-4 items-center  md:flex-row ">
        <div className="flex-1 space-y-6 py-6 lg:space-y-10">
          <h1 className='font-integral text-4xl lg:text-6xl'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className='font-satoshi text-lg lg:text-xl'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <Button label="Shop Now" bdrRadius="rounded-full" fontColor="text-white" bgColor="bg-black"/>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:justify-start lg:flex-nowrap lg:gap-16 lg:pt-8">
            <Counter count={"200"} label="International Brands"/>
            <Counter count={"2,000"} label="High-Quality Products"/>
            <Counter count={"30,000"} label="Happy Customers"/>
          </div>
        </div>
        <div className="flex-1">
          <img src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </div>
  )
}

export default Hero