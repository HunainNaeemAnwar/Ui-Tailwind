import React from "react";

const Cart = () => {
  return (
    <section className="  absolute top-[200px] pb-20 text-black 2 min-w-full">
      <div className="grid grid-cols-1 gap-y-6 text-sm  ">
        {" "}
        <div className="flex justify-evenly border font-poppinsBold  py-3 items-center">
          {" "}
          <h2>Product</h2> <h2>Price</h2> <h2>Quantity</h2> <h2>SubTotal</h2>{" "}
        </div>
        <div className="flex justify-evenly font-poppinsBold py-3 border  items-center">
          {" "}
          <h2>LCD Monitor</h2> <h2>600$</h2>{" "}
          <span>
            <input
              type="number"
              className="w-12 border-2 text-black border-black  rounded-sm"
            />
          </span>{" "}
          <h2>600$</h2>{" "}
        </div>
        <div className="flex justify-evenly font-poppinsBold py-3 border items-center">
          {" "}
          <h2>LCD Monitor</h2> <h2>600$</h2>{" "}
          <span>
            <input
              type="number"
              className="w-12 border-2 text-black border-black rounded-sm"
            />
          </span>{" "}
          <h2>600$</h2>{" "}
        </div>
        <div className="flex justify-between px-6 text-black">
          <button className="py-2 px-4 border border-black rounded-sm ">
            Return To Shop
          </button>
          <button className="py-2 px-4 border border-black rounded-sm ">
            Update Cart
          </button>{" "}
        </div>
      </div>
      <div className="grid grid-cols-1 border-t pt-10   mt-16 md:grid-cols-2 gap-x-4 gap-y-6 pl-6 pr-10 pb-10 ">
        <div className="col-span-1 ">
          <input
            type="text"
            placeholder="Coupon Code"
            className="py-2 pl-2 text-black border text-sm border-black rounded-sm "
          />{" "}
          <button className="bg-[#DB4444] py-2 px-4 text-sm rounded-sm text-white font-poppinsRegular">
            {" "}
            Apply Coupon
          </button>
        </div>
        <div className="flex flex-col justify-evenly p-4 mt-10 md:mt-0 border-2 rounded-sm col-span-1 border-black px-4 font-poppinsRegular text-sm text-black items-start">
          <h2 className="font-poppinsBold text-base">Cart</h2>
          <div className="flex flex-row justify-between py-2 w-full border-black border-b">
            <span>SubTotal</span> <span>1000$</span>
          </div>
          <div className="flex justify-between items-center w-full py-2 border-black border-b">
            <span>Shippping</span> <span>Free</span>
          </div>
          <div className="flex justify-between items-center w-full py-2 border-black border-b">
            <span>Total</span> <span>1000$</span>
          </div>
          <button className="bg-[#DB4444] py-2 px-4 text-sm mt-2 text-white place-self-center rounded-sm font-poppinsRegular">
            {" "}
            Proceed To CheckOut
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
