import { useState } from "react";
import { useConversion } from "../../../../../hooks/useConversion/useConversion";
import { useHomeContext } from "../../../../../hooks/useHomeContext/useHomeContext";
import QuantityUpdate from "../../../../QuantityUpdate/QuantityUpdate";

type Props = {
    item: CartItem
    index: number
}

const CartItem = ({ item, index }: Props) => {
    const { formatCurrency } = useConversion()
    const { setCart } = useHomeContext()

    const qtyMethod = (sub?: boolean) => {
        setCart(prev => {
            const updtCart: Cart = JSON.parse(JSON.stringify(prev))
            sub ?
                (updtCart[index].total > 0 ? updtCart[index].total-- : 0)
                : updtCart[index].total++
            return updtCart
        })
    }

    return (
        <div>
            <div>
                <span>{item.title}</span>
                <QuantityUpdate size={item.total} subMethod={() => qtyMethod(true)} addMethod={() => qtyMethod()} />
            </div>
            <span>{formatCurrency(item.price * item.total)}</span>
        </div>
    );
};

export default CartItem;