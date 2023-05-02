import axios from "axios"
import { Fruits, response } from "../interface/Fruits"
export default class FruitsCrud {
    public static getFuits = () => {
        return axios.get<response<Fruits[]>>(`${import.meta.env.VITE_APP_API_URL} `)
    }
    public static getFruit = (id: String) => {
        return axios.get<Fruits>(`${import.meta.env.VITE_APP_API_URL}/${id}`)
    }
    public static addFruit(fruit: Fruits) {
        return axios.post(`${import.meta.env.VITE_APP_API_URL} `, fruit)
    }
    public static DeleteFruit = (id: String) => {
        return axios.delete(`${import.meta.env.VITE_APP_API_URL}/${id}`)
    }
    public static UpdateFruit = (fruit: Fruits) => {
        return axios.put(`${import.meta.env.VITE_APP_API_URL}/${fruit.id}`, fruit)
    }
    public static getFuitswithPage = (page: Number) => {
        return axios.get<response<Fruits[]>>(`https://localhost:7022/api/Products/${page}/GetAll `)
    }
}