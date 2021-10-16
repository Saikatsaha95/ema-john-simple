import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // console.log(props);
  //console.log(cart);

  let totalQuantity = 0;

  //   Calculating total
  const cartReducer = (previousValue, currentValue) =>
    previousValue + currentValue.price * (currentValue.quantity || 1);
  const total = parseFloat(cart.reduce(cartReducer, 0));

  //calculating the total quantity
  for (const product of cart) {
    totalQuantity = totalQuantity + (product.quantity || 1);
  }

  const shipping = total > 0 ? 15 : 0;
  //calculating tax
  const tax = total * 0.2;
  const totalAmount = total + tax + shipping;

  return (
    <div className="cart">
      <div className="order-summary">
        <h3>Order Summary</h3>
        <h5>Items ordered: {totalQuantity}</h5>
      </div>
      <br />
      <table>
        <tbody>
          <tr>
            <th>Total before tax: </th>
            <td>${total.toFixed(2)}</td>
          </tr>

          <tr>
            <th>Shipping: </th>
            <td>${shipping.toFixed(2)}</td>
          </tr>

          <tr>
            <th>Estimated Tax:</th>
            <td>${tax.toFixed(2)}</td>
          </tr>

          <tr>
            <th>Order total:</th>
            <td>${totalAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="place-order">{props.children}</div>
    </div>
  );
};

export default Cart;
