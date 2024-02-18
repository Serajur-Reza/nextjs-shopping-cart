"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCart } from "@/store/slices/cartSlice";
import { logout } from "@/store/slices/userSlice";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  const dispatch = useAppDispatch();

  const logoutUser = () => {
    // console.log('fdakfld');
    dispatch(logout());
    dispatch(clearCart());
  };
  return (
    <div className="py-4 bg-white top-0 sticky z-10 shadow-lg ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-4xl font-bold" data-test="main-logo">
            Shopping Cart
          </Link>
          {/* <div className="lg:flex hidden w-full max-w-[500px]">
            <input
              type="text"
              placeholder="Search for a product..."
              className="border-2 border-blue-500 px-6 py-2 w-full"
            />
            <div className="bg-blue-500 text-white text-[26px] grid place-items-center px-4">
              <BsSearch />
            </div>
          </div> */}
          <div className="flex gap-4 md:gap-8 items-center">
            <Link
              href="/checkout"
              className="text-xl font-bold"
              data-test="main-products"
            >
              Checkout
            </Link>
            <Button className="cursor-pointer" onClick={logoutUser}>
              logout
            </Button>
            {/* <div className="flex items-center gap-2">
                {username !== "" ? (
                  <img
                    src="https://robohash.org/Terry.png?set=set4"
                    alt="avatar"
                    className="w-6"
                  />
                ) : (
                  <FaUser className="text-gray-500 text-2xl" />
                )}
                <div className="text-gray-500 text-2xl">
                  {username !== "" ? (
                    <CustomPopup />
                  ) : (
                    <span
                      className="cursor-pointer hover:opacity-85"
                      onClick={() => dispatch(updateModal(true))}
                      data-test="login-btn"
                    >
                      Login
                    </span>
                  )}
                </div>
              </div> */}
            {/* <div
              className="text-gray-500 text-[32px] relative hover:cursor-pointer hover:opacity-80"
              // onClick={showCart}
              data-test="cart-btn"
            >
              <AiOutlineShoppingCart />
              <div
                className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
                data-test="cart-item-count"
              >
                {cartCount}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
