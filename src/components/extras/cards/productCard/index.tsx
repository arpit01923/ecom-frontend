import React from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../../redux/store";
import { addProductToCart } from "../../../../services/cart";
import Button from "../../../standard/button";
import ToastNotification from "../../../standard/toastNotification";

interface Props {
  data: any;
}
const ProductCard: React.FC<Props> = ({ data }) => {
  const { user } = useSelector((state: RootState) => state.Common);

  const addProductToCartApi = useMutation(
    (data: { productId: string; userId: string }) => addProductToCart(data),
    {
      onSuccess: (res) => {
        const { cart, success, message } = res.data;
        if (success)
          ToastNotification({
            status: "success",
            message: message || "Product added successfully to cart",
          });
        else
          ToastNotification({
            status: "error",
            message: message || "Something went wrong",
          });
      },
      onError: (err) => {
        console.log(err);
        ToastNotification({
          status: "error",
          message: "Something went wrong",
        });
      },
    }
  );
  const cartHandler = (data: any) => {
    const productId = data._id;
    const userId = user._id;
    const args = { productId, userId };
    addProductToCartApi.mutate(args);
  };
  return (
    <div
      className="h-[350px] rounded-10 overflow-hidden shadow-primaryShadow hover:scale-105 hover:duration-500 cursor-pointer"
      key={data?._id}
    >
      <div className="h-2/3">
        <Link to={`/product/${data?._id}`}>
          <img
            src={data?.img}
            alt="product-image"
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
      <div className="flex items-center h-1/3">
        <div className="rounded-10 text-sm -mt-1 px-5 w-full">
          <div className="font-bold text-base">{data?.brand}</div>
          <div className="line-clamp-1">{data?.description}</div>
          <div className="flex gap-2 items-center">
            <div className="font-bold">₹ {data?.price}</div>
            <div className="text-xs line-through">₹ 2999</div>
          </div>
          <Button
            className="w-full my-2"
            onClick={() => cartHandler(data)}
            loading={addProductToCartApi.isLoading}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
