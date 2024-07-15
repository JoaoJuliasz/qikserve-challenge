import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useConversion } from "../../../../../../../hooks/useConversion/useConversion";

import style from './modalModifier.module.css'

type Props = {
    modifier: Modifier
    setItemPrice: Dispatch<SetStateAction<number>>
    setOptions: Dispatch<SetStateAction<string[]>>
}

const ModalModifier = ({ modifier, setItemPrice, setOptions }: Props) => {
    const [modifierSelections, setModifierSelections] = useState({} as { [type: string]: number })

    const { formatCurrency } = useConversion()

    const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setModifierSelections(prev => ({ ...prev, [name]: Number(value) }))
        setItemPrice(Number(value))
        setOptions(prev => ([...prev, `${name} (${formatCurrency(Number(value))})`]))
    }

    return (
        <div className={style.container}>
            <div className={style.titleWrapper}>
                <h6 className={style.title}>{modifier.name}</h6>
                <span className={style.subTitle}>Select {modifier.minChoices} option{modifier.minChoices > 1 && 's'}</span>
            </div>
            {
                modifier.items.map(item => (
                    <div className={style.item} key={item.id}>
                        <div className={style.wrapper}>
                            <span className={style.name}>{item.name}</span>
                            <span className={style.price}>{formatCurrency(item.price)}</span>
                        </div>
                        <input className={style.input} type="radio" name={modifier.name} value={item.price}
                            checked={modifierSelections[modifier.name] === item.price}
                            onChange={handleChangeRadio} />
                    </div>
                ))
            }
        </div>
    );
};

export default ModalModifier;