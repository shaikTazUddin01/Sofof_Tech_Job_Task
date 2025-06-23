import img from "../../assets/category_banner.png";
import category1 from "../../assets/categories/1.png";
import category2 from "../../assets/categories/2.png";
import category3 from "../../assets/categories/3.png";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "mosque",
      img: category1,
    },
    {
      id: 2,
      name: "mosque",
      img: category2,
    },
    {
      id: 3,
      name: "mosque",
      img: category3,
    },
  ];
  return (
    <div className="my-14">
      <div className="flex justify-center items-center">
        <img src={img} alt="" className="w-[712px] h-[152px]" />
      </div>
      <div className="flex gap-6 justify-center items-center mt-10">
        {categories?.map((category) => (
          <div className=" ">
            <a href={`/products`}>
              <img
                src={category?.img}
                alt={category?.name}
                className="h-[200px] w-[200px] rounded-2xl"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
