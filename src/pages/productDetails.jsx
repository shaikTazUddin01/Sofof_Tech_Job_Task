import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../redux/features/product.api';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (!product || error) return <p className="text-center mt-10">Product not found!</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <button className="mr-4">&#8592;</button>
        <h1 className="text-2xl font-bold">Product Details</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col md:w-1/3 gap-4 bg-gray-100 p-4 rounded-lg">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="rounded-lg"
          />
          <div className="flex gap-4 mt-2">
            <img
              src={product.imageUrl}
              alt="Thumb 1"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <img
              src={product.imageUrl}
              alt="Thumb 2"
              className="w-20 h-20 rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.details}</p>
          <p className="text-2xl font-bold mb-4">
            {product.currency} {product.price}
          </p>
          <button className="bg-gray-800 text-white px-4 py-2 rounded mb-6">Add to Cart</button>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Product Overview</h3>
            <p>For this item, it will be distributed in Haram and Around Haram from 1 Ramadan to 10 Ramadan</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>100% natural spring water source</li>
              <li>Advanced multi-stage filtration</li>
              <li>BPA-free recyclable packaging</li>
              <li>Perfect pH balance (7.0-7.5)</li>
              <li>Convenient bulk packaging</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Suggested Similar Products</h3>
          <button className="text-purple-700">See All &gt;</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 flex flex-col">
              <img
                src={product.imageUrl}
                alt="Similar Product"
                className="w-full h-32 object-contain mb-3"
              />
              <h4 className="font-semibold text-center">{product.name}</h4>
              <p className="text-gray-500 text-sm text-center mb-2">{product.details}</p>
              <div className="text-center mb-3">
                <span className="font-bold">{product.currency} {product.price}</span>
              </div>
              <button className="bg-gray-200 text-gray-800 w-full py-2 rounded-md hover:bg-gray-300 transition-colors mt-auto">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
