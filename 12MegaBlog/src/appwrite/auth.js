import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";



// improved code for auth service with better error handling and more methods for user management like update email, update password, delete account etc.

class AuthService {
    client = new Client();

    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount ({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password,name);
            if(userAccount){
                //  call login method for login 
                return  this.login({email, password})
            }else{
                return userAccount
            }
            
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            // if error occur the use creatEmailSession method for login
            return await this.account.createEmailPasswordSession(email, password)
            
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwerite service :: error", error);
        }
    }

    async logout(){
        try {
            await this.account.deleteSession();
            
        } catch (error) {
            console.log("Appwerite service :: error", error);
        }
    }


}



const authService = new AuthService();

export default authService; 