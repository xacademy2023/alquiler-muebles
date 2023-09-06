import { Request, Response } from "express";
import {productService} from "../services"


export const getProducts = async (req: Request, res: Response) => {
  try{
  const listProducts = await productService.getProducts()
  res.json(listProducts)
  }catch(error:any){
    res.status(500).json({ action: "getProducts", error: error.message });
}}

export const newProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.json({
      newProduct,
    });
  } catch (error:any) {
    res.status(500).json({ action: "getProducts", error: error.message })
  }
};

export const getProductId = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductId(req.params.id);
    if (!product) {
      res
        .status(404)
        .json({ action: "getProduct", error: "error when fetching product" });
    } else {
      res.json(product);
    }
  } catch (error: any) {
    res.status(500).json({ action: "getProduct", error: error.message });
  }
};


export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const {id } = req.params
    const deletedProduct = await productService.deleteProduct(id);
    if (deletedProduct=== 0) {
      res
        .status(404)
        .json({ action: "deleteProduct", error: "error when deleting product" });
    } else {
      res.json({ messaje: `Producto con el id ${id} eliminado con exito!` });
    }
  } catch (error: any) {
    res.status(500).json({ action: "deleteProduct", error: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const {id } = req.params
    const updatedProduct = await productService.updateProduct(
      id,
      req.body
    );

    if (!updatedProduct) {
      res
        .status(404)
        .json({ action: "updateProduct", error: "error when updating product" });
    } else {
      res.json({ id: req.params.userId, ...req.body });
    }
  } catch (error: any) {
    res.status(500).json({ action: "updateProduct", error: error.message });
  }
}
;
