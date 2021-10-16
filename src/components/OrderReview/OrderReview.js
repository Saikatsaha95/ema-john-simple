import React from "react";
import { useHistory } from "react-router";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb, clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";

import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();

  //removing item from localstorage
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  //place order
  const handleProceedToShipping = () => {
    history.push("/shipping");
    // setCart([]);
    // clearTheCart();
  };
  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {cart.map((product) => (
            <ReviewItem
              product={product}
              key={product.key}
              handleRemove={handleRemove}
            ></ReviewItem>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart}>
            <button onClick={handleProceedToShipping} className="btn-regular">
              Proceed to Shipping
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
