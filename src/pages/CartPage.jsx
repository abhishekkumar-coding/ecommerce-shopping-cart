import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <h2 className="text-xl mt-6">Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;
