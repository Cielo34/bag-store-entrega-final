import data from "./data.json";

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        categoryId
          ? data.filter((product) => product.category === categoryId)
          : data
      );
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.find((product) => product.id === productId));
    }, 500);
  });
};
