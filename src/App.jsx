import { useEffect, useState } from 'react';
import './App.css';
import Satesto from './Satesto';

function App() {
  const [productsList, setProductList] = useState([]);

  async function getAllProducts() {
    try {
      let products = await fetch("https://fakestoreapi.com/products");
      let data = await products.json();
      setProductList(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getAllProducts(); 
  }, []);

  return (
    <>
      <div className="container">
        {productsList.map((product) => (
          <Satesto key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
