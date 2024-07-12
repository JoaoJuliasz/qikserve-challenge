import { useState } from 'react'
import burger from '../../assets/icon/Hamburger.svg'
import style from './header.module.css'

type Props = {
    bgColor: string
    bannerImg: string
}

const Header = ({ bgColor, bannerImg }: Props) => {
    const [selected, setSelected] = useState<"MENU" | "ENTRAR" | "CONTATO">("MENU")

    return (
        <div className={style.container}>
            <div className={style.itemsWrapper} style={{ background: bgColor }}>
                <div className={style.desktop}>
                    <h6 className={`${style.item} ${selected === 'MENU' ? style.selected : ''}`} onClick={() => setSelected("MENU")}>MENU</h6>
                    <h6 className={`${style.item} ${selected === 'ENTRAR' ? style.selected : ''}`} onClick={() => setSelected("ENTRAR")}>ENTRAR</h6>
                    <h6 className={`${style.item} ${selected === 'CONTATO' ? style.selected : ''}`} onClick={() => setSelected("CONTATO")}>CONTATO</h6>
                </div>
                <div className={style.mobile} style={{ background: bgColor }}>
                    <h6 className={style.item}>{selected}</h6>
                    <img className={style.img} src={burger} />
                </div>
            </div>
            <div className={style.banner} style={{ backgroundImage: ` url(${bannerImg})` }} />
        </div>
    )
}

export default Header