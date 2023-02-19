import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import Button from "../components/standard/button";
import Loader from "../components/standard/loader";
import { getProductById } from "../services/product";

const ProductDetails = () => {
  const { pathname } = useLocation();
  const [product, setProduct] = useState<any>(null);

  const productQuery = useQuery(
    "",
    () => getProductById(pathname?.split("/")[2]),
    {
      onSuccess: (res) => {
        const success = res.data.success;
        const data = res.data.products;
        if (success) {
          setProduct(data);
        }
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  console.log(product);

  return (
    <div className="flex justify-center">
      <div className="h-productHeight p-9 rounded-10 w-[800px] flex flex-col lg:flex-row lg:gap-10 bg-white shadow-primaryShadow">
        {productQuery.isLoading ? (
          <div className="grid place-items-center w-full">
            <Loader color="#F29E30" height="100" width="100" />
          </div>
        ) : (
          <>
            <div className="h-[200px] w-1/3 rounded-5 overflow-hidden">
              <img
                src={product?.img}
                alt="product-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-2/3">
              <div className="text-2xl font-bold line-clamp-1">
                {product?.brand}
              </div>
              <div className="text-lg text-secondary line-clamp-1">
                {product?.title}
              </div>
              <div className="text-lg flex gap-5">
                <div className="font-bold">₹ {product?.price}</div>
                <div>
                  MRP <span className="line-through">₹ 995</span>
                </div>
                <div className="text-primary font-bold">(Rs. 8600 OFF)</div>
              </div>
              <div className="flex border-2 p-1 gap-2 max-w-min whitespace-nowrap">
                <div className="font-bold">4.4*</div>
                <div className="border-r-2"></div>
                <div>25 Reviews</div>
              </div>
              <div className="font-bold">Product Details</div>
              <div className="text-xs line-clamp-6">{product?.description}</div>
              <div className="flex gap-5 flex-col w-full">
                <Button className="py-3" outline>
                  Wishlist
                </Button>
                <Button className="py-3">Add to cart</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
