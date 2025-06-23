import { CurrencyIcon } from "../../assets/icons/icons";

const ProductCard = ({ product }) => {
  return (
    <a href={`/product/${product.id}`}>
      <div className="bg-[#F5F2F8] rounded-[16px] p-4 flex flex-col">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-[88px] w-[134px] mx-auto"
        />

        <h3 className="text-center text-[16px] font-medium tracking-wide">
          {product.name}
        </h3>

        <p className="text-[#616161] text-sm text-center mb-2 font-medium">
          {product.details}
        </p>

        <div className="text-center mb-3">
          <span className="font-medium text-xl tracking-wide flex items-center justify-center gap-1">
            <CurrencyIcon />
            {product.price}
          </span>
        </div>

        <button className="text-[16px] bg-[#4C4C4C] hover:bg-[#474747] cursor-pointer text-white py-2.5 px-[22px] rounded-full">
          Add to Cart
        </button>
      </div>
    </a>
  );
};
export default ProductCard;
