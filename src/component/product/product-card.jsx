import React from 'react';

const ProductCard = ({product}) => {
   
    return (
        <div key={product.id} className="bg-white rounded-lg p-4 flex flex-col">
        <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-32 object-contain mb-3"
        />
        <h3 className="font-semibold text-center">{product.name}</h3>
        <p className="text-gray-500 text-sm text-center mb-2">{product.details}</p>
        <div className="text-center mb-3">
            <span className="font-bold">
                {product.currency}{product.price}
            </span>
        </div>
        <button className="bg-gray-200 text-gray-800 w-full py-2 rounded-md hover:bg-gray-300 transition-colors mt-auto">
            Add to Cart
        </button>
    </div>
    );
};

export default ProductCard;