import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  //loading data from localstorage and displaying in the UI
  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];
    if (products.length) {
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        //console.log(addedProduct);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct["quantity"] = quantity;
          // console.log(addedProduct);
          storedCart.push(addedProduct);
        }
      }

      setCart(storedCart);
    }
  }, [products]);

  //handle addtocart button
  const handleAddToCart = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };

  //handeling search
  const handleSearch = (e) => {
    let searchText = e.target.value.toLowerCase();
    const matchedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    );

    setDisplayProducts(matchedProduct);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search product"
          onChange={handleSearch}
        />
      </div>
      {/* <h3>Total product found: {displayProducts.length}</h3> */}
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              product={product}
              handleAddToCart={handleAddToCart}
              key={product.key}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
