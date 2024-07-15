import { Dispatch, SetStateAction } from "react"

type HomeContext = {
    menu: Menu
    venue: Venue
    cart: Cart[]
    setCart: Dispatch<SetStateAction<Cart[]>>
}