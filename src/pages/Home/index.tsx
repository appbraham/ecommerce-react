
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
            <ProductContainer title="NEW ARRIVALS"/>
            <Divider />
            <ProductContainer title="TOP SELLING" />
         </section>

         <DressStyle />

         <Comments />

        </div>
     )
}

export default Home