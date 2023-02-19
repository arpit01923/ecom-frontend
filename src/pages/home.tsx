import { Autoplay, Pagination } from "swiper";
import Carousal from "../components/standard/carousal";
import { categories } from "../constants";

const Home = () => {
  return (
    <div className="text-3xl font-bold">
      <Carousal
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay
        slides={[
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg"
            alt="banner1"
          />,
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg"
            alt="banner2"
          />,
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg"
            alt="banner3"
          />,
        ]}
      />
      <div className="p-4 container mx-auto">
        <h1 className="text-center pb-5">Sort by Categories</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((item) => (
            <div>
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-200 sm:h-300 object-cover rounded-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
