import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import jwt from "jsonwebtoken";
import { userService } from "../services";

export const newUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  const user = await User.findOne({ where: { email: email } });

  if (user) {
    return res.status(400).json({
      msg: `El usuario ${email} ya existe`,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      role,
    });
    res.json({
      msg: `Uruario ${name} creado exitosamente!`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Upps ocurrio un error",
      error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user: any = await User.findOne({ where: { email: email } });

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
