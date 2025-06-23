import React from "react";

import { useGetProductsQuery } from "../redux/features/product.api";

const Product = () => {
  const { data: products } = useGetProductsQuery();

  console.log(products);
  return <div></div>;
};

export default Product;
