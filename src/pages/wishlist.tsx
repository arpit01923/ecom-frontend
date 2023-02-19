import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/standard/button";

const Wishlist = () => {
  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 pt-10">
      <div className="h-[350px] rounded-10 overflow-hidden shadow-primaryShadow hover:scale-105 hover:duration-500 cursor-pointer">
        <div className="h-2/3">
          <Link to={`/product`}>
            <img
              src="https://picsum.photos/300"
              alt="product-image"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
        <div className="flex items-center h-1/3">
          <div className="rounded-10 text-sm -mt-1 px-5">
            <div className="font-bold text-base">Rolex</div>
            <div className="line-clamp-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              neque incidunt vero aut dicta ad quas dolores possimus ratione
              iusto pariatur libero non eum veritatis beatae, necessitatibus
              debitis laudantium omnis!
            </div>
            <div className="flex gap-2 items-center">
              <div className="font-bold">₹ 5999</div>
              <div className="text-xs line-through">₹ 2999</div>
            </div>
            <div className="">
              <Button outline className="w-full">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
