import React from "react";
import { TbBasketMinus } from "react-icons/tb";
import { TbBasketPlus } from "react-icons/tb";
import { useSelector } from "react-redux";

const ProductCard = ({ product, handleAdd, handleDelete }) => {
  const { data } = useSelector((store) => store.card);

  const found = data.find((item) => item.productId === product.id);

  return (
    <div className="productCard grid  grid-rows order-1 sm:grid-cols-[1fr_200px] gap-2 cursor-pointer transition duration-300 border shadow-sm p-3 rounded-lg hover:bg-gray-100">
      <div className="">
        <div className="flex flex-col h-full justify-between">
          <div className="text-xl flex flex-col gap-2 ">
            <h1 className="font-bold">{product.title}</h1>
            <p className="text-gray-600">{product.desc}</p>
          </div>
          <p className="text-lg font-semibold">{product.price}</p>
        </div>
      </div>

      <div className="order-first sm:order-last ">
        <div>
          <img
            className="rounded-md object-cover w-full h-[115px] max-h-[115px] "
            src={product.photo}
            alt=""
          />
        </div>

        <div className="flex justify-around mt-2 text-3xl text-gray-600">
          <button onClick={() => handleAdd(product, found)} className="">
            <TbBasketPlus className="text-green-800 font-bold" />
          </button>
          {found ? (
            <span className="text-xl font-bold text-red-700">
              {found.amount}
            </span>
          ) : (
            <span className="invisible">3</span>
          )}
          <button onClick={() => handleDelete(found.id)} className="">
            <TbBasketMinus className="text-amber-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
