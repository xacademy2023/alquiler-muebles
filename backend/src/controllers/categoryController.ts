import { NextFunction, Request, Response } from "express";
import { Category } from "../models/category";
import {categoryService, userService} from "../services"


export const getCategories = async (req: Request, res: Response) => {
 try{
  const listCategories = await categoryService.getAllCategories();

  res.json(listCategories);
}catch(error:any){
  res.status(500).json({ action: "getAllCategories", error: error.message })
}
};

export const newCategory =  async (req: Request, res: Response) => {
  const {name} =req.body
  try{
  const category =  await categoryService.createCategory(name)
  res.json(category);
  }catch(error:any){
    res.status(500).json({action: "createCategory", error: error.message})
  }
}


