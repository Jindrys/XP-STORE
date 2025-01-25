import React from "react";
import NavSec from "../components/NavSec";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import cart from "../data/cart.json";

const CartPage = () => {
  return (
    <div className="flex flex-col bg-[#400000] gap-2">
      <NavSec />
      <div className="min-h-[80vh] flex p-10 gap-6">
        <div className="min-w-[60%] min-h-[500px] bg-[#800000] rounded-[30px] p-4 ">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
        <div className="w-full h-fit bg-[#800000] border-4 border-[#FF0000] p-4 text-white rounded-[20px]">
          <form className="size-full flex flex-col gap-4 items-center px-4">
            <div className="w-full flex flex-col gap-2">
              <h2 className="font-main uppercase font-bold text-[20px]">
                Method:
              </h2>
              <form className="flex flex-col gap-2">
                <div>
                  <input
                    className="w-full h-[40px] text-black border-2 border-[#FF0000] rounded-full px-4"
                    type="text"
                    placeholder="Card Number:"
                  />
                </div>
                <div>
                  <input
                    className="w-full h-[40px] text-black border-2 border-[#FF0000] rounded-full px-4"
                    type="text"
                    placeholder="Expiry Date:"
                  />
                </div>
                <div>
                  <input
                    className="w-full h-[40px] text-black border-2 border-[#FF0000] rounded-full px-4"
                    type="text"
                    placeholder="CVV:"
                  />
                </div>
              </form>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h2 className="font-main uppercase font-bold text-[20px]">
                Enter your address:
              </h2>
              <input
                className="w-full h-[40px] text-black border-2 border-[#FF0000] rounded-full px-4"
                type="text"
                placeholder="Street"
              />
              <input
                className="w-full h-[40px] text-black border-2 border-[#FF0000] rounded-full px-4"
                type="text"
                placeholder="City"
              />
              <input
                className="w-full h-[40px] text-black border-2 border-[#FF0000] rounded-full px-4"
                type="text"
                placeholder="Country"
              />
              <input
                className="w-full h-[40px] text-black border-2 border-[#FF0000] rounded-full px-4"
                type="text"
                placeholder="Zip"
              />
            </div>
            <button
              className="w-fit px-6 py-2 bg-[#400000] border-2 border-[#FF0000] text-white font-main uppercase rounded-full
               hover:bg-[#FF0000] hover:text-black"
              type="submit"
            >
              Pay
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
