import { where } from "sequelize";
import { User } from "../models/user";




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
    console.log(updatedUser)
    const user = await User.update(
      { ...updatedUser },
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
