import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Navbar'; 

const Listings = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(4); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://passerelle-shop-api.julienpoirier-webdev.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();

  }, []);

  const showMoreProducts = () => {
    setVisible((prevVisible) => prevVisible + 4);
  };

  return (
    <div className="listings">
      {products.slice(0, visible).map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
      {visible < products.length && (
        <button onClick={showMoreProducts} className="load-more">
          Afficher plus
        </button> // Bouton pour afficher plus de produits
      )}
    </div>
  );
};

export default Listings;