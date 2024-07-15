import { CSSProperties } from "react";

import style from './quantityUpdate.module.css'
import { useHomeContext } from "../../hooks/useHomeContext/useHomeContext";
import MinIcon from "./component/MinIcon/MinIcon";
import MaxIcon from "./component/MaxIcon/MaxIcon";

type Props = {
    size: number
    cart?: boolean
    subMethod: () => void
    addMethod: () => void
}

const QuantityUpdate = ({ size, cart, addMethod, subMethod, }: Props) => {
    const { venue } = useHomeContext()

    return (
        <div className={`${style.container} ${cart ? style.cart : ''}`} style={{ '--primaryColour': venue.webSettings.primaryColour } as CSSProperties}>
            <span data-testid="min" className={`${style.min} ${style.btn}`} onClick={subMethod}><MinIcon cart={cart} /></span>
            <span className={style.value}>{size}</span>
            <span data-testid="max" className={`${style.max} ${style.btn}`} onClick={addMethod}><MaxIcon cart={cart} /></span>
        </div>
    );
};

export default QuantityUpdate;