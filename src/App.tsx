import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import AddUpdateProduct from "./pages/add-update-product";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductDetails from "./pages/product-details";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Wishlist from "./pages/wishlist";

const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/add-update-product",
        element: <AddUpdateProduct />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
