import axios from "axios";
import { Users } from "../interface/Users"

export class Auth {
    public static Login(user: Users) {
        return axios.post<Users>(`https://localhost:7022/api/Users/login`, user)
    }
    public static Register(user: Users) {
        return axios.post<Users>(`https://localhost:7022/api/Users/`, user)
    }
    public static isLoginIn() {
        return !!localStorage.getItem("Token")
    }
}