import { useEffect, useState } from 'react';
import './App.css';
import ShoppingCart from './Components/ShoppingCart';
import ProductsList from './Components/ProductsList';
import useStore from './store';
import "./Styles/Footer.css";
import ProductNabvar from "./Components/ProductNavbar";
import Welcome from "./Components/Welcome";
import Footer from './Components/Footer/Footer';
import InfoBanner from './Components/InfoBanner';
import TrademarksBanner from './Components/TrademarksBanner';
import Body from './Components/body/Body';
import CarouselInstagram from './Components/carrousel/Carousel';
import Slider from './Components/Slider';
import SliderMobile from './Components/SliderMobile';

function App() {

  const { ShoppingCartStatus, FecthData, } = useStore();

  useEffect(() => {
    FecthData();
  }, [])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="App">

      <ProductNabvar />

      {
        ShoppingCartStatus ? <ShoppingCart /> : <Welcome />
      }
      <Body />
      <TrademarksBanner />
{/*   
  ****** PARA USAR ESTE CARRUSEL HAY QUE INSTALAR: ******

  ****** npm install react-material-ui-carousel ******

 */}
    
      {
      windowWidth > 768 ? <Slider /> : <SliderMobile />
      }


      <ProductsList />

{/*       <CarouselInstagram/> */}

      <InfoBanner />
      

      <Footer />

    </div>
  );
}

export default App;
