import { CreateUserModel, LoginModel, Registermodel } from "../models/AuthModel";
import UserModel from "../models/UserModel";
import request from "./request";

class AuthService {
    ENDPOINT = 'api/BookStore';

    public async login(data: LoginModel): Promise<UserModel> {
        const url = `${this.ENDPOINT}/Login`;
        return request.post(url, data).then((res) => {
            
            return res.data as UserModel;
        });
    }

    public async create(model: Registermodel): Promise<Registermodel> {
        const url = `${this.ENDPOINT}/register`;
        return request.post<Registermodel>(url, model).then((res) => {
            return res.data;
        });
    }
}
export default new AuthService();
