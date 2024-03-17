"use client";

import Image from "next/image";
import ButtonMnue from "../_Components/_Buttons/ButtonMnue";
import { useUser, UserButton } from "@clerk/nextjs";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useShoppingCart } from "../_Context/ContextShoppingCart";
import CartApis from "../_Data/CartApis";
import Cart from "./_Cart/Cart";
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cart, setCart, openCart, setOpenCart } = useShoppingCart();
  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes("sign-in"));
  });

  const { user } = useUser();
  useEffect(() => {
    user && getUserCartItems_();
  }, [user]);

  const getUserCartItems_ = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        res.data.data.forEach((item) => {
          setCart((oldCarts) => [
            ...oldCarts,

            {
              id: item.id,
              product: item?.attributes?.products?.data?.[0],
            },
          ]);
        });
      }
    );
  };

  return (
    !isLoggedIn && (
      <header className="bg-white w-full">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 shadow-lg   ">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-10">
              <Image src="/logo.svg" alt="logo" width={50} height={50} />
              <h2 className="text-gray-600 flex  items-center font-bold text-2xl">
                Trade Cars
              </h2>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Careers{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      History{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Projects{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Blog{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/sign-in"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[3B3486]"
                      href="/"
                    >
                      Register
                    </a>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setOpenCart(!openCart)}
                  className=" flex  gap-5  items-center"
                >
                  <h2 className=" flex gap-1 items-center cursor-pointer">
                    <FiShoppingCart size={20} /> ({cart?.length})
                  </h2>
                  {openCart && <Cart />}
                  <UserButton afterSignOutUrl="/" />
                </div>
              )}
              <ButtonMnue />
            </div>
          </div>
        </div>
      </header>
    )
  );
}

export default Header;
