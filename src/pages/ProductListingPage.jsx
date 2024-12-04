import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios"; 

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const exchangeRate = 83; 

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const updatedProducts = response.data.map((product) => ({
          ...product,
          priceInINR: (product.price * exchangeRate).toFixed(0),
        }));
        setProducts(updatedProducts); 
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false); 
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
