import { Dispatch, SetStateAction, useState } from 'react';

import Modal from '../../../Modal/Modal';

import { useConversion } from '../../../../hooks/useConversion/useConversion';
import ModalModifier from './component/ModalModifier/ModalModifier';

import style from './contentModal.module.css'
import ModalButton from '../../../ModalButton/ModalButton';
import QuantityUpdate from '../QuantityUpdate/QuantityUpdate';

type Props = {
    item: MenuItem
    setOpen: Dispatch<SetStateAction<boolean>>
}

const ContentModal = ({ item, setOpen }: Props) => {
    const [size, setSize] = useState<number>(1)

    const { formatCurrency } = useConversion()

    return (
        <Modal setOpen={setOpen} headerImg={item.images?.[0].image}>
            <div className={style.container}>
                <div className={style.item}>
                    <h5 className={style.title}>{item.name}</h5>
                    <p className={style.subTitle}>{item?.description}</p>
                </div>
                {item.modifiers ?
                    <div style={{ maxHeight: '150px', overflow: 'auto' }}>
                        {item.modifiers.map(modifier => (
                            <ModalModifier key={modifier.id} modifier={modifier} />
                        ))}
                    </div>
                    : null
                }
                <div className={style.footer}>
                    <QuantityUpdate size={size} setSize={setSize} />
                    <ModalButton disabled={size === 0} text={`Add to order • ${formatCurrency(item.price * size)}`} />
                </div>
            </div>
        </Modal>
    );
};

export default ContentModal;