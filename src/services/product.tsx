import Axios from "./axios";

const getAllProductApi = () => Axios.get("/product");

const getProductById = (id: string) => Axios.get(`/product/${id}`);

export { getAllProductApi, getProductById };
