import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10) || 1;
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  return (
    <div className="flex items-center justify-between border-b py-4">
      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
      <div className="flex-1 ml-4">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={handleQuantityChange}
        className="w-16 border rounded-md text-center"
      />
      <button onClick={handleRemove} className="bg-red-500 text-white px-4 py-2 rounded-md">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
