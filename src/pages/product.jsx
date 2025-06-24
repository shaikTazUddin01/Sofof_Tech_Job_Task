import { useGetProductsQuery } from "../redux/features/product.api";
import ProductCard from "../component/product/product-card";
import {
  DollarIcon,
  DownArrowIcon,
  LeftArrowIcon,
} from "../assets/icons/icons";
const Product = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleNavigation = () => {
    window.location.href = "/";
  };
  return (
    <div className="max-w-[712px] mx-auto -mt-3">
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-[10px] md:mb-[32px]">
        <span className="flex gap-5 items-center">
          <span
            className="px-[17px] py-[14px] bg-[#F3EFF6] rounded-full cursor-pointer"
            onClick={handleNavigation}
          >
            <LeftArrowIcon />
          </span>
          <h1
            className="tracking-wide font-bold md:w-[535px] leading-5 md:leading-9 p-0
          text-xl md:text-2xl lg:text-[32px] xl:text-[40px] text-[#222222]
          "
          >
            Mecca mosques most needed
          </h1>
        </span>

        <button className="flex items-center justify-center gap-2 p-3 rounded-full text-white bg-gradient-to-r from-[#65358A] to-[#2B153C] cursor-pointer mt-2 md:mt-0">
          <span className="flex items-center justify-center gap-1">
            <DollarIcon />
            <p className="text-sm font-medium tracking-wider">SAR</p>
          </span>
          <DownArrowIcon />
        </button>
      </header>
      <span className="bg-[#222222] text-white rounded-2xl text-[16px] font-medium tracking-wider px-[16px] py-[14px] flex md:inline-block justify-center">
        Providing Water
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-[32px] mb-[60px] md:mb-[90px]">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
