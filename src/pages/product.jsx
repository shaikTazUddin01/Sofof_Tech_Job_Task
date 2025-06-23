import React from "react";
import { useGetProductsQuery } from "../redux/features/product.api";
import ProductCard from "../component/product/product-card";
import {
  DollarIcon,
  DownArrowIcon,
  LeftArrowIcon,
} from "../assets/icons/icons";
import { Link } from "react-router-dom";

const Product = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleNavigation = () => {
    window.location.href = "/";
  };
  return (
    <div className="max-w-[712px] mx-auto px-4">
      <header className="flex items-center justify-between mb-8">
        <span className="flex gap-4 items-center">
          <span
            className="p-4 bg-[#F3EFF6] rounded-full cursor-pointer"
            onClick={handleNavigation}
          >
            <LeftArrowIcon />
          </span>
          <h1 className="text-[40px] font-bold w-[535px] leading-9">
            Mecca mosques most needed
          </h1>
        </span>

        <button className="flex items-center justify-center gap-2 p-3 rounded-full text-white bg-gradient-to-r from-[#65358A] to-[#2B153C]">
          <span className="flex items-center justify-center gap-1">
            <DollarIcon />
            <p className="text-sm font-medium tracking-wider">SAR</p>
          </span>
          <DownArrowIcon />
        </button>
      </header>
      <span className="bg-[#222222] text-white rounded-2xl text-[16px] font-medium tracking-wider px-[16px] py-[14px]">
        Providing Water
      </span>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 mb-[90px]">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
