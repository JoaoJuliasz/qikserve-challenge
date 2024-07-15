import { Dispatch, SetStateAction, useState } from 'react';

import Modal from '../../../../Modal/Modal';

import { useConversion } from '../../../../../hooks/useConversion/useConversion';
import ModalModifier from './component/ModalModifier/ModalModifier';

import style from './contentModal.module.css'
import ModalButton from '../../../../ModalButton/ModalButton';
import QuantityUpdate from '../../../../QuantityUpdate/QuantityUpdate';
import { useHomeContext } from '../../../../../hooks/useHomeContext/useHomeContext';

type Props = {
    item: MenuItem
    setOpen: Dispatch<SetStateAction<boolean>>
}

const ContentModal = ({ item, setOpen }: Props) => {
    const [size, setSize] = useState<number>(1)
    const [itemPrice, setItemPrice] = useState<number>(0)
    const [options, setOptions] = useState<string[]>([])

    const { formatCurrency } = useConversion()

    const { setCart } = useHomeContext()

    const handleClick = () => {
        setCart(prev => ([...prev, {
            title: item.name,
            price: itemPrice || item.price,
            total: size,
            options
        }]))
        setOpen(false)
    }

    return (
        <Modal setOpen={setOpen} headerImg={item.images?.[0].image}>
            <div className={style.container}>
                <div className={style.item}>
                    <h5 className={style.title}>{item.name}</h5>
                    <p className={style.subTitle}>{item?.description}</p>
                </div>
                {item.modifiers ?
                    <div className={style.options}>
                        {item.modifiers.map(modifier => (
                            <ModalModifier key={modifier.id} modifier={modifier} setItemPrice={setItemPrice} setOptions={setOptions} />
                        ))}
                    </div>
                    : null
                }
                <div className={style.footer}>
                    <QuantityUpdate size={size} subMethod={() => setSize(prev => prev > 0 ? prev - 1 : 0)} addMethod={() => setSize(prev => prev + 1)} />
                    <ModalButton disabled={size === 0} text={`Add to order • ${formatCurrency((itemPrice || item.price) * size)}`} onClick={handleClick} />
                </div>
            </div>
        </Modal>
    );
};

export default ContentModal;