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

  if (user.isSeller) {
    const token = jwt.sign(
      {
        email: email,
      },
      process.env.SECRET_KEY || "secret"
    );
    return res.json(token);
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
    },
    process.env.SECRET_KEY || "secret"
  );

  res.json(token);
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error: any) {
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
      res.json(user);
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
      res.json({ id: req.params.userId, ...req.body });
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
