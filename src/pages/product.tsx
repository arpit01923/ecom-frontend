import { HiSearch } from "react-icons/hi";
import { useQuery } from "react-query";
import ProductCard from "../components/extras/cards/productCard";
import Input from "../components/standard/input";
import Paginate from "../components/standard/paginate";
import { useState } from "react";
import { getAllProductApi } from "../services/product";
import Button from "../components/standard/button";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getAllProductQuery = useQuery("", () => getAllProductApi(), {
    onSuccess: (res) => {
      const success = res.data.success;
      const data = res.data.products;
      if (success) setProducts(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <div className="flex">
      <div className="hidden lg:block w-60 border-r">
        <div className="font-bold text-lg">FILTERS</div>
        <div className="py-1 border-b"></div>
        <div className="text-sm pt-3 pb-2 font-bold">CATEGORIES</div>
        {[1, 2, 3, 4].map((item) => (
          <div className="flex gap-3 items-center text-sm py-1">
            <Input onChange={() => {}} type="checkbox" value="" />
            <div className="-mt-1">Casual Shoes</div>
          </div>
        ))}
        <div className="py-1 border-b"></div>
        <div className="text-sm pt-3 pb-2 font-bold">BRAND</div>
        {[1, 2, 3, 4].map((item) => (
          <div className="flex gap-3 items-center text-sm py-1">
            <Input onChange={() => {}} type="checkbox" value="" />
            <div className="-mt-1">Red Chief</div>
          </div>
        ))}
        <div className="py-1 border-b"></div>
        <div className="text-sm pt-3 pb-2 font-bold">SORT</div>
        {[1, 2, 3].map((item) => (
          <div className="flex gap-3 items-center text-sm py-1">
            <Input onChange={() => {}} type="checkbox" value="" />
            <div className="-mt-1">Men</div>
          </div>
        ))}
      </div>
      <div className="w-full px-5">
        <div className="flex justify-center">
          <div className="w-full md:w-2/5">
            <Input
              placeholder="Search for product"
              label=""
              onChange={() => {}}
              type="text"
              iconLeft={<HiSearch />}
              value=""
            />
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Button onClick={() => navigate("/add-update-product")}>
            Add products
          </Button>
        </div>
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 pt-10">
          {products.map((item) => (
            <ProductCard data={item} />
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Paginate pageCount={4} pageRangeDisplayed={1} />
        </div>
      </div>
    </div>
  );
};

export default Product;
