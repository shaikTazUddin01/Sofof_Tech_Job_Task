import React from 'react';
import { useGetProductsQuery } from '../redux/features/product.api';
import ProductCard from '../component/product/product-card';

const Product = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="max-w-[712px] mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Mecca mosques most needed</h1>
                <button className="text-purple-700">See all</button>
            </div>
            <div className="bg-gray-100 p-4 mb-6 inline-block rounded-lg">
                <span className="text-sm">Providing Water</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {products?.map((product) => (
                   <ProductCard product={product}/>
                ))}
            </div>
        </div>
    );
};

export default Product;
