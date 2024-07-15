import { Dispatch, SetStateAction } from 'react'
import icon from '../../../../assets/icon/arrow.svg'

import style from './contentName.module.css'

type Props = {
    name: string
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
}

const ContentName = ({ name, show, setShow }: Props) => {

    const handleClick = () => setShow(prev => !prev)

    return (
        <div className={style.nameWrapper}>
            <h5 className={style.name}>{name}</h5>
            <img className={`${style.icon} ${show ? style.up : style.down}`} src={icon} onClick={handleClick}/>
        </div>
    );
};

export default ContentName;