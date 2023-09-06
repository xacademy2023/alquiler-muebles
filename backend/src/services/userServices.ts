import { User } from "../models";
import bcrypt from "bcrypt";

export const getByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    return user;
  } catch (error) {
    console.error("Error when fetching uses", error);
  }
};

export const createUser = async (user: any) => {
  try {
    const { name, email, password, isSeller } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      isSeller,
    });
  } catch (error) {
    console.error("Error when creating user", error);
  }
};

export const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.error("Error when fetching users", error);
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await User.findByPk(userId);
    return user;
  } catch (error) {
    console.error("Error when fetching user", error);
  }
};

export const updateUser = async (userId: string, updatedUser: any) => {
  try {
    const { password } = updatedUser;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.update(
      { ...updatedUser, password: hashedPassword },
      {
        where: {
          id: userId,
        },
      }
    );
    return user;
  } catch (error) {
    console.error("Error when updating user", error);
  }
};

export const deleteUser = async (userId: any) => {
  try {
    const user = await User.destroy({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (error) {
    console.error("Error when deleting user", error);
  }
};
