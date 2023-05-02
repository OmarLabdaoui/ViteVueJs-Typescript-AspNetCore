import { defineStore } from "pinia"
import { Cart } from "../../interface/Cart"
import { Fruits } from "../../interface/Fruits"
import jwt_decode from "jwt-decode";
export const CartStore = defineStore("cart", {
    state: () => ({
        Cart: localStorage.getItem("CartItems") ? JSON.parse(localStorage.getItem("CartItems")!) : [] as Cart[], token: "" ? "" : localStorage.getItem("Token"), decodedToken: ""
    }),
    getters: {
        Cartlenght: (state) => state?.Cart?.length,
        CartItems: (state) => state?.Cart,
        subtotal: (state) => state.Cart?.reduce((acc: any, item: Cart) =>

            acc + (item.quantity.valueOf() * item.fruits.price.valueOf()), 0)
    },
    actions: {
        addToCart(CartFruits: Cart) {
            const findFruit = this.Cart?.findIndex((fr: any) => fr.fruits?.id === CartFruits.fruits?.id)
            if (findFruit >= 0) {
                this.Cart[findFruit].quantity = this.Cart[findFruit].quantity.valueOf() + CartFruits.quantity.valueOf()
            } else {
                const temp = { ...this.Cart, Cart: this.Cart = [...this.Cart, CartFruits] }
                localStorage.setItem("CartItems", JSON.stringify(this.Cart))
                return temp

            }

        },
        increseQte(CartFruits: Fruits) {
            const findFruit = this.Cart.findIndex((fr: any) => fr.fruits?.id === CartFruits.id)
            this.Cart[findFruit].quantity = this.Cart[findFruit].quantity.valueOf() + 1

        }, RemovefromCart(CartFruits: Fruits) {
            const remove = this.Cart.filter((item: any) => item.fruits.id != CartFruits.id)
            this.Cart = remove
            localStorage.setItem("CartItems", JSON.stringify(remove))
        },
        isLoginIn(): boolean {
            if (this.token) {
                return true
            } else {
                return false
            }
        },
        getToken(token: any) {
            this.token = token

        },
        Logout() {
            localStorage.removeItem('Token');
            this.token = ""
        },
        GetDecodedToken() {
            const token: any = localStorage.getItem("Token")
            const decoded: any = jwt_decode(token);
            this.decodedToken = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
            console.log(decoded);
            return decoded

        },
        isAdmin() {
            const token: any = localStorage.getItem("Token")
            const decoded: any = jwt_decode(token);
            const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
            if (role === "admin") {
                return true
            } else {
                false
            }
        }

    }
})