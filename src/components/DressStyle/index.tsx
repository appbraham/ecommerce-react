
import  casual  from '../../assets/dressStyle/casual.png';
import  formal  from '../../assets/dressStyle/formal.png';
import  party  from '../../assets/dressStyle/party.png';
import  gym  from '../../assets/dressStyle/gym.png';

const DressStyle = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
        <div className='flex flex-col gap-8 bg-gray-200 rounded-[40px] py-8 mx-4 px-8 md:px-14 md:gap-16 md:py-16'>        
            <h2 className="font-integral text-3xl text-center lg:text-5xl">BROWSE BY DRESS STYLE</h2>

            <div className="grid gap-6 items-center justify-center grid-cols-1 md:grid-cols-5">

                <div className='relative md:col-span-2 rounded-3xl overflow-hidden'>
                    <span className='absolute z-10 top-6 left-6 font-satoshi font-bold text-2xl lg:text-4xl lg:top-10 lg:left-10'>Casual</span>
                    <img className='h-48 object-cover object-top w-full cursor-pointer transition-transform duration-500 hover:scale-110 md:h-72' src={casual} alt="Casual Style" />
                </div>

                <div className='relative md:col-span-3 rounded-3xl overflow-hidden'>
                    <span className='absolute z-10 top-6 left-6 font-satoshi font-bold text-2xl lg:text-4xl lg:top-10 lg:left-10'>Formal</span>
                    <img className='h-48 object-cover object-top w-full cursor-pointer transition-transform duration-500 hover:scale-110 md:h-72' src={formal} alt="Formal Style" />
                </div>

                <div className='relative md:col-span-3 rounded-3xl overflow-hidden'>
                    <span className='absolute z-10 top-6 left-6 font-satoshi font-bold text-2xl lg:text-4xl lg:top-10 lg:left-10'>Party</span>
                    <img className='h-48 object-cover object-top w-full cursor-pointer transition-transform duration-500 hover:scale-110 md:h-72' src={party} alt="Party Style" />
                </div>

                <div className='relative md:col-span-2 rounded-3xl overflow-hidden'>
                    <span className='absolute z-10 top-6 left-6 font-satoshi font-bold text-2xl lg:text-4xl lg:top-10 lg:left-10'>Gym</span>
                    <img className='h-48 object-cover object-top w-full cursor-pointer transition-transform duration-500 hover:scale-110 md:h-72' src={gym} alt="Gym Style" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default DressStyle