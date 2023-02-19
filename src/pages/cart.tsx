import React, { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import HorizonalCard from "../components/extras/cards/productCard/horizontalCard";
import Button from "../components/standard/button";
import ToastNotification from "../components/standard/toastNotification";
import { RootState } from "../redux/store";
import { getCart } from "../services/cart";

const Cart = () => {
  const { user } = useSelector((state: RootState) => state.Common);
  const [cartList, setCartList] = useState([]);

  const getCartApi = useQuery("getCart", () => getCart(user._id), {
    onSuccess: (res) => {
      const { success, cart } = res.data;
      if (success) setCartList(cart);
    },
    onError: (err) => {
      console.log(err);
      ToastNotification({ status: "error", message: "Something went wrong" });
    },
  });

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5 items-center lg:items-start justify-center">
      <div className="grid gap-5">
        {cartList?.map((item) => (
          <HorizonalCard data={item} refetchData={() => getCartApi.refetch()} />
        ))}
      </div>
      <div className="shadow-primaryShadow h-fit p-5 grid gap-2 rounded-10 w-full sm:w-[450px]">
        <p className="text-center text-lg font-bold">Price Details</p>
        <div className="border-b"></div>
        <div className="flex justify-between">
          <p>MRP</p>
          <p>₹ 5500</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p>- ₹ 1800</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <p>₹ 40</p>
        </div>
        <div className="border-b"></div>
        <div className="flex justify-between">
          <p>Total Price</p>
          <p>₹ 3700</p>
        </div>
        <div className="border-b"></div>
        <p className="text-center">
          You will save <span className="font-bold">₹ 1800</span>
        </p>
        <Button>Place Order</Button>
      </div>
    </div>
  );
};

export default Cart;
