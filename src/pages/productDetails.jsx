import { useParams } from "react-router-dom";
import {
  useGetProductsQuery,
  useGetSingleProductQuery,
} from "../redux/features/product.api";
import {
  CurrencyIcon,
  DollarIcon,
  DownArrowIcon,
  LeftArrowIcon,
} from "../assets/icons/icons";
import ProductCard from "../component/product/product-card";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);
  const { data: products } = useGetProductsQuery();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (!product || error)
    return <p className="text-center mt-10">Product not found!</p>;

  const handleNavigation = () => {
    window.history.back(); // fixed: navigator → window.history.back()
  };

  return (
    <div className="max-w-[720px] mx-auto">
      <header className="flex items-center justify-between mb-8 -mt-5">
        <span className="flex gap-4 items-center">
          <span
            className="p-4 bg-[#F3EFF6] rounded-full cursor-pointer"
            onClick={handleNavigation}
          >
            <LeftArrowIcon />
          </span>
          <h1 className="text-[40px] font-bold w-[535px] leading-9">
            Product Details
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

      <div className="flex flex-col md:flex-row gap-8 mt-8 items-center">
        <div className="flex flex-col w-[45%] gap-4 bg-gray-100 rounded-lg p-5 h-[366px]">
          <img
            src={product.thumbnailImg}
            alt={product.name}
            className="h-[195px] w-[276px]"
          />
          <div className="flex gap-4 mt-2 justify-between">
            <img
              src={product.imageUrl}
              alt="Thumb 1"
              className="w-[141px] h-20 object-cover"
            />
            <img
              src={product.imageUrl}
              alt="Thumb 2"
              className="w-[141px] h-20  object-cover"
            />
          </div>
        </div>

        <div className="w-[55%]">
          <h2 className="text-[24px] font-medium">{product.name}</h2>
          <p className="text-[#616161] mb-1.5 text-xl font-normal">
            {product.details}
          </p>
          <div className="text-center mb-3">
            <span className="font-medium text-[28px] tracking-wide flex items-center gap-1">
              <CurrencyIcon />
              {product.price}.0
            </span>
          </div>
          <button className="bg-[#616161] text-white px-5 py-1 rounded-full mb-[22px] text-[16px]">
            Add to Cart
          </button>

          <div>
            <h3 className="font-medium text-[16px] tracking-wider">
              Product Overview
            </h3>
            <p className="text-[#616161] font-normal tracking-wide leading-[17px]">
              For this items it will be distribute in Haram and Around Haram
              from 1 Ramadan to 10 Ramadan
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[16px] tracking-wider mt-5">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-[#616161] text-[16px]">
              <li>100% natural spring water source</li>
              <li>Advanced multi-stage filtration</li>
              <li>BPA-free recyclable packaging</li>
              <li>Perfect pH balance (7.0-7.5)</li>
              <li>Convenient bulk packaging</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[24px] font-medium tracking-wider">
            Suggested Similar Products
          </h3>
          <button className="text-[#616161] text-xl">See All &gt;</button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products?.slice(0, 4)?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
