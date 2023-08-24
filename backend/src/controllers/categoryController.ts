import { NextFunction, Request, Response } from "express";
import { Category } from "../models/category";

export const getCategories = async (req: Request, res: Response) => {
  const listCategories = await Category.findAll();

  res.json(listCategories);
};

export const newCategory = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    await Category.create({
      name,
    });
    res.json({
      msg: `La categoría ${name} fue creada exitosamente!`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Error al crear una categoría",
      error,
    });
  }
};
