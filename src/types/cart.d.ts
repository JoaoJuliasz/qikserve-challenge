type Cart = CartItem[];
interface CartItem {
    title: string
    price: number
    total: number
    options?: string[]
}