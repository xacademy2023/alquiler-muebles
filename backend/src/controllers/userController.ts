import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userService } from "../services";

export const newUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await userService.getByEmail(email);
    if (user) {
      return res.status(400).json({
        msg: `El usuario ${email} ya existe`,
      });
    } else {
      const newUser = await userService.createUser(req.body);
      res.json(newUser);
    }
  } catch (error: any) {
    res.status(500).json({ action: "createUser", error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user: any = await userService.getByEmail(email);
  if (!user) {
    return res.status(400).json({
      msg: `El usuario ${email} no existe`,
    });
  }

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) {
    return res.status(400).json({
      msg: "Password incorrecto",
    });
  }

  const token = jwt.sign(
    {
      email: email,
      role: user.role,
      userId: user.id,
    },
    process.env.SECRET_KEY || "secret"
  );

  res.json(token);
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    const newList = users?.map((user) => {
      const userId = user?.dataValues.id;
      const name = user?.dataValues.name;
      const orders = user?.dataValues.orders.map((order: any) => {
        const orderId = order?.dataValues.id;
        const products = JSON?.parse(order?.dataValues?.products);
        const totalPrice = order?.dataValues.totalPrice;
        const totalQuantity = order?.dataValues.totalQuantity;
        const newOrder = { orderId, products, totalPrice, totalQuantity };
        return newOrder;
      });

      const newUser = { userId, name, orders };
      return newUser;
    });
    console.log(newList);
    res.json(newList);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ action: "getAllUsers", error: error.message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUser(req.params.userId);
    if (!user) {
      res
        .status(404)
        .json({ action: "getUser", error: "error when fetching user" });
    } else {
      const id = user.dataValues.id;
      const name = user.dataValues.name;
      const email = user.dataValues.email;
      const ordersList = user.dataValues.orders;
      const orders: any = ordersList.map((order: any) => {
        const orderId = order.dataValues.id;
        const products = JSON.parse(order.dataValues.products);
        const totalPrice = order.dataValues.totalPrice;
        const totalQuantity = order.dataValues.totalQuantity;
        const newOrder = { orderId, products, totalPrice, totalQuantity };
        return newOrder;
      });
      const newUser = { id, name, email, orders };

      res.json(newUser);
    }
  } catch (error: any) {
    res.status(500).json({ action: "getUser", error: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await userService.updateUser(
      req.params.userId,
      req.body
    );
    if (!updatedUser) {
      res
        .status(404)
        .json({ action: "updateUser", error: "error when updating user" });
    } else {
      res.json({ msg: "Usuario actualizado correctamente" });
    }
  } catch (error: any) {
    res.status(500).json({ action: "updateUser", error: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const deletedUser = await userService.deleteUser(userId);
    if (deletedUser === 0) {
      res
        .status(404)
        .json({ action: "deleteUser", error: "error when deleting user" });
    } else {
      res.json({ messaje: `Usuario con el id ${userId} eliminado con exito!` });
    }
  } catch (error: any) {
    res.status(500).json({ action: "deleteUser", error: error.message });
  }
};
