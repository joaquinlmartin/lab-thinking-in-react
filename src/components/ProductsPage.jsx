import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  const onFilter = (element) => {
    let filteredProducts = jsonData.filter((product) => {
      return product.name[0].toLowerCase() == element.toLowerCase();
    });
    setProducts(filteredProducts);
  };

  return(
      <div>
        <h1>IronStore</h1>
        <h2><SearchBar onFilter={onFilter}/></h2>
        <h2><ProductTable products={products}/></h2>
      </div>  
  )
}

export default ProductsPage;