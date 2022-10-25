import { useEffect } from 'react';
import './App.css';
import ShoppingCart from './Components/ShoppingCart';
import ProductsList from './Components/ProductsList';
import useStore from './store';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const { ShoppingCartStatus,FecthData, } = useStore();
 
  useEffect(()=>{
    FecthData();
  },[])
  
  return (
    
   
    <div className="App">
      
      {
        ShoppingCartStatus ? <ShoppingCart /> : <ProductsList />
        
      }
    
    </div>
  );
}

export default App;
