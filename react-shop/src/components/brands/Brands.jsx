import './brands.css'
import hm from './../../images/brands/HM.png'
import obey from './../../images/brands/Obey.png'
import shopify from './../../images/brands/Shopify.png'
import lacoste from './../../images/brands/Lacoste.png'
import levis from './../../images/brands/Levis.png'
import amazon from './../../images/brands/Amazon.png'
const Brands = () => {
  return ( 
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li><a href="#!"><img src={obey} alt="" /></a></li>
          <li><a href="#!"><img src={amazon} alt="" /></a></li>
          <li><a href="#!"><img src={hm} alt="" /></a></li>
          <li><a href="#!"><img src={shopify} alt="" /></a></li>
          <li><a href="#!"><img src={levis} alt="" /></a></li>
          <li><a href="#!"><img src={lacoste} alt="" /></a></li>
        </ul>
      </div>
    </section>
   );
}
 
export default Brands;