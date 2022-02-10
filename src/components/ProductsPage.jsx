import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>
        <h2><SearchBar/></h2>
        <h2><ProductTable/></h2>
      </div>  
  )
}

export default ProductsPage;