import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Navbar'; 

const Listings = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(4); 
  const [filter, setFilter] = useState("tous");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch('https://passerelle-shop-api.julienpoirier-webdev.com/products', { signal });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Fetch error:', error);
      }
    }
  };


    fetchData();
    return () => {
      controller.abort();
    };

  }, []);
  const filteredProducts = filter === "tous" ? products : products.filter(product => product.category === filter);

  const showMoreProducts = () => {
    setVisible((prevVisible) => prevVisible + 4);
  };
  return (
    <div className="listings">
      <button onClick={() => setFilter("tous")}>Tous</button>
      <button onClick={() => setFilter("Figurines et Collectibles")}>Figurines et Collectibles</button>
      <button onClick={() => setFilter("Voitures miniatures")}>Voitures miniatures</button>

      {filteredProducts.slice(0, visible).map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}

      {visible < filteredProducts.length && (
        <button onClick={showMoreProducts} className="load-more">
          Afficher plus
        </button> 
      )}
    </div>
  );
};

export default Listings;