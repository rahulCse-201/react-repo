import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite";


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appProjectId)
        this.account = new Account(this.client);
    }


    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
        if(userAccount){
            return this.login({email, password});

        }else{
            return userAccount;   // what can be happen if in this not useraccount create 
        }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser({}){
        try {
            return await this.account.get();
        } catch (error) {
            // study this in depth 
            console.log("Appwrite serive :: getCurrentUser :: error :: ", error);
            // throw error;
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error :: ", error);
            // throw error;
        }
    }


}

const authService = new AuthService();

export default authService;