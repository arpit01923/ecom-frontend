import Axios from "./axios";

const getCart = (id: string) => Axios.get(`/cart/${id}`);

const addProductToCart = (data: { userId: string; productId: string }) =>
  Axios.post("/cart", data);

const deleteProductFromCart = (userId: string, data: any) => {
  console.log({ data });
  return Axios.delete(`/cart/${userId}`, { data });
};

export { getCart, addProductToCart, deleteProductFromCart };
