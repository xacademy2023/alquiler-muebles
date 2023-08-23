import { Request, Response } from "express";
import { Product } from "../models/product";
import { Category } from "../models/category";

export const getProducts = async (req: Request, res: Response) => {
  const listProducts = await Product.findAll({
    include: [{ model: Category, attributes: ["name"] }],
  });

  res.json(listProducts);
};

export const newProduct = async (req: Request, res: Response) => {
  const { name, description, price, image, stock, idCategory } = req.body;

  try {
    await Product.create({
      name,
      description,
      price,
      image,
      stock,
      idCategory,
    });
    res.json({
      msg: `El producto ${name} fue creado exitosamente!`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Error al crear un usuario",
      error,
    });
  }
};
