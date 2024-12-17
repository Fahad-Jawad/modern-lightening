import { categoriesData } from "../constants/navLinks";

export const getProductsByCategory = (category) => {
    const productIds = categoriesData[category] || [];
    return productIds.map((id) => products[id]);
  };
  