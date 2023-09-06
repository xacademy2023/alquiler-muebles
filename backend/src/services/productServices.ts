import { Product } from "../models/product";
import { Category } from "../models/category";

export const getProducts = async () => {
  try {
    const listProducts = await Product.findAll({
      include: [{ model: Category, attributes: ["name"] }],
    });
    return listProducts;
  } catch (error) {
    console.error("Error when fetching products", error);
  }
};

export const createProduct = async (product: any) => {
  const { name, description, price, image, stock, idCategory } = product;
  try {
    const newProduct = await Product.create({
      name,
      description,
      price,
      image,
      stock,
      idCategory,
    });
    return newProduct;
  } catch (error) {
    console.error("Error when creating products", error);
  }
};

export const getProductId = async (id: string) => {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (error) {
    console.error("Error when fetching product", error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const product = await Product.destroy({
      where: {
        id: id,
      },
    });
    return product;
  } catch (error) {
    console.error("Error when deleting product", error);
  }
};

export const updateProduct = async (id: string, updatedProduct: any) => {
  try {
    const product = await Product.update(
      { ...updatedProduct },
      {
        where: {
          id: id,
        },
      }
    );
    return product;
  } catch (error) {
    console.error("Error when updating product", error);
  }
};
