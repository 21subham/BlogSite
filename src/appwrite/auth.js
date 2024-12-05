import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite Service :: createAccount :: :: error : ", error);
      if (error.code === 409) {
        throw new Error("Email address is already in use.");
      } else {
        throw error;
      }
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("login error", error);
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return {
        $id: user.$id,
        name: user.name,
        email: user.email,
      };
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      //to delete just 1 session .deleteSession('current)
      await this.account.deleteSessions();
    } catch (error) {
      console.log("logout error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
