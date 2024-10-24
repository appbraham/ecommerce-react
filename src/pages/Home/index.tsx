
import Hero from '../../components/Hero'
import Brand from '../../components/Brand'
import ProductContainer from '../../components/ProductContainer'
import Divider from '../../components/Divider'

const Home = () => {
    return (
        <>   
         <Hero />
         <Brand />

         <section>
            <ProductContainer title="NEW ARRIVALS"/>
            <Divider />
            <ProductContainer title="TOP SELLING" />
         </section>
        </>
     )
}

export default Home