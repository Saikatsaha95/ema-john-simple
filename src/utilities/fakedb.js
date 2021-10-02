const getStoredCart = () => {
  const exist = localStorage.getItem("shopping-cart");
  return exist ? JSON.parse(exist) : {};
};

const updateDb = (cart) => {
  localStorage.setItem("shopping-cart", JSON.stringify(cart));
};

const addToDb = (id) => {
  let shoppingCart = getStoredCart();
  if (shoppingCart[id]) {
    const newCount = shoppingCart[id] + 1;
    shoppingCart[id] = newCount;
  } else {
    shoppingCart[id] = 1;
  }
  updateDb(shoppingCart);
};

const removeFromDb = (id) => {
  const shoppingCart = getStoredCart();
  if (shoppingCart) {
    delete shoppingCart[id];
    updateDb(shoppingCart);
  }
};

const clearTheCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, clearTheCart, getStoredCart };

// use local storage as your db for now
/* const addToDb = (id) => {
  const exists = getDb();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
};

const getDb = () => localStorage.getItem("shopping_cart");
const updateDb = (cart) => {
  localStorage.setItem("shopping_cart", JSON.stringify(cart));
};

const removeFromDb = (id) => {
  const exists = getDb();
  if (!exists) {
  } else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
};

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
};

const clearTheCart = () => {
  localStorage.removeItem("shopping_cart");
};

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }; */
