
import Hero from '../../components/Hero'
import Brand from '../../components/Brand'
import ProductContainer from '../../components/ProductContainer'
import Divider from '../../components/Divider'
import DressStyle from '../../components/DressStyle'
import Comments from '../../components/Comments'

const Home = () => {
    return (
      <div className='mb-12'>   
         <Hero />
         <Brand />

         <section className='px-4'>
            <ProductContainer title="NEW ARRIVALS" label='View All'/>
            <Divider />
            <ProductContainer title="TOP SELLING" label='View All' />
         </section>

         <DressStyle />

         <section className="max-w-[1440px] mx-auto my-16 px-4">
            <h2 className="font-integral font-bold text-3xl my-16 lg:text-5xl">OUR HAPPY CUSTOMERS</h2>
            <div className="flex gap-6 items-center pb-4 overflow-x-auto">
               <Comments />
            </div>
         </ section>
         
      </div>
     )
}

export default Home