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
  RightIcon,
} from "../assets/icons/icons";
import ProductCard from "../component/product/product_card";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);
  const { data: products } = useGetProductsQuery();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (!product || error)
    return <p className="text-center mt-10">Product not found!</p>;

  const handleNavigation = () => {
    window.history.back();
  };

  return (
    <main className="max-w-[712px] w-full mx-auto px-2 xl:px-0">
      {/* section header */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 -mt-4 gap-4">
        <div className="flex gap-2 lg:gap-5 items-center">
          <button
            className="px-[17px] py-[14px] bg-[#F3EFF6] rounded-full cursor-pointer"
            onClick={handleNavigation}
          >
            <LeftArrowIcon />
          </button>
          <h1 className="text-xl md:text-2xl lg:text-[32px] xl:text-[40px] font-bold leading-9 text-[#222222] w-full">
            Product Details
          </h1>
        </div>
        <button className="flex items-center justify-center gap-2 p-3 rounded-full text-white bg-gradient-to-r from-[#65358A] to-[#2B153C] w-fit self-start sm:self-auto">
          <span className="flex items-center justify-center gap-1">
            <DollarIcon />
            <span className="text-sm font-medium tracking-wider">SAR</span>
          </span>
          <DownArrowIcon />
        </button>
      </header>
      {/* product Details */}
      <section className="flex flex-col md:flex-row gap-8 mt-8 items-center">
        <figure className="flex flex-col w-full md:w-[48%] gap-4 bg-[#F5F2F8] rounded-[33px] p-5 h-auto md:h-[366px] overflow-hidden">
          <img
            src={product.thumbnailImg}
            alt={product.name}
            className="h-auto md:h-[196px] w-full md:w-[276px] object-contain"
          />
          <figcaption className="flex gap-4 mt-3 justify-between w-full">
            <img
              src={product.imageUrl}
              alt="Thumb 1"
              className="w-[160px] h-[106px] object-cover rounded-md"
            />
            <img
              src={product.imageUrl}
              alt="Thumb 2"
              className="w-[160px] h-[106px] object-cover rounded-md"
            />
          </figcaption>
        </figure>

        <article className="w-full md:w-[58%]">
          <h2 className="text-[24px] font-medium">{product.name}</h2>
          <p className="text-[#616161] ">{product.details}</p>
          <p className="text-[#616161] mb-0.5 text-xl font-normal text-center flex items-center">
            {product.size} ml • {product.quantity} bottles
          </p>
          <div className="text-center mb-2.5">
            <span className="font-medium text-[28px] tracking-wide flex items-center gap-1 justify-center md:justify-start">
              <CurrencyIcon />
              {product.price}
            </span>
          </div>
          <button className="bg-[#616161] text-white px-5 py-1 rounded-full mb-[14px] text-[16px] w-full sm:w-auto">
            Add to Cart
          </button>

          <section>
            <h3 className="font-medium text-[16px]">Product Overview</h3>
            <p className="text-[#616161] font-normal leading-[18px] mt-1 text-[16px]">
              {product.overview}
            </p>
          </section>

          <section>
            <h3 className="font-medium text-[16px] mt-4">Key Features</h3>
            <ul className="list-none list-inside text-[#616161] text-[16px] -space-y-[4px]">
              {product?.features?.map((feature, idx) => {
                return (
                  <li key={idx} className="flex gap-2 items-center">
                    <span className="h-1 w-1 bg-[#616161] rounded-full"></span>
                    <p>{feature}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        </article>
      </section>
      {/* similar product section */}
      <section className="mt-5">
        <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
          <h3 className="text-[24px] font-medium tracking-wider p-0">
            Suggested Similar Products
          </h3>
          <button className="text-[#616161] text-xl font-normal flex items-center">
            <span>See All</span>
            <RightIcon />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-[60px] md:mb-[90px]">
          {products?.slice(0, 4)?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
