const { default: axiosClient } = require("./AxiosClient");

const addToCart = (payload) => axiosClient.post("/carts", payload);

const getUserCartItems = (email) =>
  axiosClient.get(
    `/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`
  );

const deleteCartItem = (id) => axiosClient.delete(`/carts/${id}`);

export default {
  getUserCartItems,
  deleteCartItem,
  addToCart,
};
