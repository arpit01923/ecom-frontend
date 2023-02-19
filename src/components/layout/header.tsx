import React, { useState } from "react";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../standard/button";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const headerLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Product",
    link: "/product",
  },
];
const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isLoggedIn } = useSelector((state: RootState) => state.Auth);
  const [showSidebar, setShowSidebar] = useState(false);
  const changeShowSideBar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <>
      <div className="sticky top-0 bg-white shadow-primaryShadow z-50">
        <div className="flex justify-between items-center container mx-auto p-4">
          <div
            className="text-3xl font-bold text-primary cursor-pointer"
            onClick={() => navigate("/")}
          >
            E-com
          </div>
          <div className="hidden lg:flex gap-5">
            {headerLinks.map((item, index) => (
              <div
                key={index + 1}
                className={classNames(
                  "font-bold",
                  pathname === item.link
                    ? "text-primary underline"
                    : "cursor-pointer"
                )}
                onClick={() => navigate(`${item.link}`)}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block">
              <div className="flex gap-5">
                {isLoggedIn ? (
                  <>
                    <AiFillHeart
                      fontSize={20}
                      className="text-primary"
                      onClick={() => navigate("/wishlist")}
                    />
                    <BsFillCartFill
                      fontSize={20}
                      className="text-primary cursor-pointer"
                      onClick={() => navigate("/cart")}
                    />
                    <HiUserCircle fontSize={20} className="text-primary" />
                  </>
                ) : (
                  <>
                    <Button outline onClick={() => navigate("/signin")}>
                      Signin
                    </Button>
                    <Button onClick={() => navigate("/signup")}>Signup</Button>
                  </>
                )}
              </div>
            </div>
            <div className="block lg:hidden">
              {showSidebar ? (
                <AiOutlineClose
                  fontSize={20}
                  className="text-primary cursor-pointer"
                  onClick={changeShowSideBar}
                />
              ) : (
                <GiHamburgerMenu
                  fontSize={20}
                  className="text-primary cursor-pointer"
                  onClick={changeShowSideBar}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      {showSidebar && (
        <div
          className={classNames(
            "w-screen h-screen fixed top-0 left-0 duration-300 z-20 shadow-primaryShadow md:backdrop-blur",
            showSidebar ? "" : "-translate-x-full"
          )}
        >
          <div className="fixed left-0 top-0 bg-white h-screen w-screen pt-20 md:w-1/2 p-5">
            <div className="flex flex-col gap-2">
              {isLoggedIn ? (
                <>
                  {headerLinks.map((item, index) => (
                    <div
                      key={index + 1}
                      className={classNames(
                        "font-bold",
                        pathname === item.link
                          ? "text-primary underline"
                          : "cursor-pointer"
                      )}
                      onClick={() => navigate(`${item.link}`)}
                    >
                      {item.name}
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div className="font-bold">Wishlist</div>
                  <div className="font-bold">Cart</div>
                  <div className="font-bold">Orders</div>
                </>
              )}
            </div>
            {!isLoggedIn && (
              <div className=" mt-2 flex flex-col gap-3">
                <Button className="w-full" outline>
                  Signin
                </Button>
                <Button className="w-full">Signup</Button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Sidebar */}
    </>
  );
};

export default Header;
