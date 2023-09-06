import { Category } from "../models";

export const getAllCategories = async () => {
  try {
    const categories = await Category.findAll();
    return categories;
  } catch (error) {
    console.error("Error when fetching categories", error);
  }
};

export const createCategory = async (name: any) => {
  try {
    const newCategory = await Category.create({ name });
    return newCategory;
  } catch (error) {
    console.error("Error when creating category", error);
  }
};
