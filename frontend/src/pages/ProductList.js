import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import useCart from '../utils/useCart';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(() => alert("Failed to load products"));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-1 gap-y-4 px-1">
      {products.map(p => (
        <ProductCard key={p.id} product={p} onAdd={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
