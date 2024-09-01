import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { deleteItem, updateItem } from "../redux/actions/basketAction.js";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateItem(item.id, item.amount + 1));
  };

  const handleDecrease = () => {
    item.amount > 1
      ? dispatch(updateItem(item.id, item.amount - 1))
      : dispatch(deleteItem(item.id));
  };

  const totalPrice = (item.price * item.amount).toFixed(2);

  return (
    <div className="flex flex-col sm:flex-row gap-4 border bg-white mb-5 rounded-lg p-4 min-h-8">
      <img
        src={item.photo}
        className="w-full sm:max-w-[250px] h-[150px] object-cover rounded-lg"
      />
      <div className="w-full h-full flex flex-col gap-3 justify-between">
        <div className="flex justify-between  gap-2">
          <div>
            <h3 className="text-xl font-semibold text-red-500">{item.title}</h3>
            <p className="text-gray-500">{item.restaurantName}</p>
          </div>

          <div className="text-end">
            <p>Total Price</p>
            <p className="font-semibold text-xl">{totalPrice} TL</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-semibold">{item.price}TL</p>
          <div className="border flex text-xl items-center rounded-lg">
            <button
              onClick={handleDecrease}
              className="p-3 text-red-500 hover:bg-red-100 transition rounded-lg"
            >
              {item.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>
            <span className="p-3">{item.amount}</span>
            <button
              onClick={handleIncrease}
              className="p-3 rounded-xl text-red-500 hover:bg-red-100"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
