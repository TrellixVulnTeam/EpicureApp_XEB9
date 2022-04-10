import user from "../models/user.js";

class usersHandler {
  static async getUserByIdHandler(id: string) {
    const result = await user.findById({ id });
    return result;
  }

  static async getUserByUsernameHandler(username: string) {
    const result = await user.findOne({ username });
    return result;
  }

  static async createUserHandler(data: any) {
    try {
      const newUser = new user({ ...data });
      const result = await newUser.save();
      return result;
    } catch (err) {
      return false;
    }
  }

  static async deleteUserHandler(id: string) {
    try {
      await user.findByIdAndDelete({ id });
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default usersHandler;
