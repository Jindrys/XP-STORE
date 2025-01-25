import React from "react";

function CartItem({ title, image, price }) {
  return (
    <div className="w-full h-[130px] bg-[#AA0000] justify-between font-main  flex items-center px-4 py-1 mb-2 text-white rounded-3xl border-4 border-[#FF0000]">
      <div className="flex h-full items-center gap-5 text-[20px]">
        <div className="aspect-video h-[90%] overflow-hidden rounded-xl bg-black flex justify-center items-center">
          <img src={image} alt={title} className="h-full" />
        </div>
        <div>{title}</div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="text-[20px]">{price}</div>
        <div className="size-12 flex justify-center items-center bg-white rounded-full text-black cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
