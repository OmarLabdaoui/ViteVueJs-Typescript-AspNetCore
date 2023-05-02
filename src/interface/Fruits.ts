export interface Fruits {
    id?: String,
    name: String,
    price: Number,
    image: String,
    CreatedAt?: Date
}
export interface response<T> {
    data?: T,
    message?: String,
    isSucess?: Boolean
    currentPage?: Number,
    page?: Number
}