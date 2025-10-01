import { categoriesData } from "../constants/data";

export const getProductsByCategory = (category) => {
    const productIds = categoriesData[category] || [];
    return productIds.map((id) => products[id]);
  };
  