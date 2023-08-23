import { NextFunction, Request, Response } from "express";
import { Category } from "../models/category";

export const getCategories = async (req: Request, res: Response) => {
  const listCategories = await Category.findAll();

  res.json(listCategories);
};

export const createCategoriesByDefault = async (
  req: Request,
  res: Response
) => {
  try {
    await Category.create({
      name: "Mesas",
    });
    await Category.create({
      name: "Sillas",
    });
    await Category.create({
      name: "Vajillas",
    });
    res.json({
      msg: `Las categorías por defecto fueron creadas exitosamente!`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Error al crear las categorías por defecto ",
      error,
    });
  }
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
