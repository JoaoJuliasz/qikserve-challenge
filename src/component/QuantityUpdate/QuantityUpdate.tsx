import { CSSProperties, Dispatch, SetStateAction } from "react";

import minIcon from '../../assets/icon/min.svg'
import maxIcon from '../../assets/icon/max.svg'

import style from './quantityUpdate.module.css'
import { useHomeContext } from "../../hooks/useHomeContext/useHomeContext";

type Props = {
    size: number
    subMethod: () => void
    addMethod: () => void
}

const QuantityUpdate = ({ size, addMethod, subMethod, }: Props) => {
    const { venue } = useHomeContext()

    return (
        <div className={style.container} style={{ '--primaryColour': venue.webSettings.primaryColour } as CSSProperties}>
            <span className={`${style.min} ${style.btn}`} onClick={subMethod}><img src={minIcon} /></span>
            <span className={style.value}>{size}</span>
            <span className={`${style.max} ${style.btn}`} onClick={addMethod}><img src={maxIcon} /></span>
        </div>
    );
};

export default QuantityUpdate;