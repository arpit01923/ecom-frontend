import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { deleteProductFromCart } from "../../../../../services/cart";
import ToastNotification from "../../../../standard/toastNotification";

interface Props {
  data: any;
  refetchData: () => void;
}
const HorizonalCard: React.FC<Props> = ({ data, refetchData }) => {
  const { user } = useSelector((state: RootState) => state.Common);

  const deleteProductFromCartApi = useMutation(
    ({ userId, args }: any) => deleteProductFromCart(userId, args),
    {
      onSuccess: (res) => {
        const { cart, success, message } = res.data;
        console.log("cart", cart);
        if (success) {
          refetchData();
          ToastNotification({
            status: "success",
            message: message || "Product added successfully to cart",
          });
        } else
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
  const deleteHandler = (data: any) => {
    const args = { productId: data._id };
    const userId = user._id;
    deleteProductFromCartApi.mutate({ userId, args });
  };
  return (
    <div className="w-full relative sm:w-[450px] sm:h-[200px] h-[150px] rounded-10 overflow-hidden flex shadow-primaryShadow">
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => deleteHandler(data)}
      >
        <AiOutlineClose />
      </div>
      <img src={data?.img} alt="" className="w-1/3 object-cover" />
      <div className="w-2/3 px-5 py-2">
        <p className="text-lg">{data.brand}</p>
        <p>{data.title}</p>
        <div className="flex gap-2 items-center">
          <div className="font-bold">₹ {data?.price}</div>
          <div className="text-xs line-through">₹ 2999</div>
        </div>
        <p className="line-clamp-1 sm:line-clamp-3 text-sm">
          {data?.description}
        </p>
        <div className="flex gap-2 items-center mt-2">
          <div className="border border-primary rounded-full w-6 text-center font-bold text-primary">
            -
          </div>
          <div className="bg-primary border border-primary rounded-full w-6 text-center font-bold text-white">
            {data?.quantity || 1}
          </div>
          <div className="border border-primary rounded-full w-6 text-center font-bold text-primary">
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizonalCard;
