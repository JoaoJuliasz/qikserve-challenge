import { useState } from 'react';
import { MenuOption } from '../../header.type';
import style from '../../header.module.css'

const menuOptions: MenuOption[] = ["MENU", "ENTRAR", "CONTATO"]

const DesktopMenu = () => {
    const [selected, setSelected] = useState<MenuOption>("MENU")

    return (
        <div className={style.desktop}>
            {menuOptions.map(option =>
                <h6 className={`${style.item} ${selected === option ? style.selected : ''}`} onClick={() => setSelected(option)}>{option}</h6>
            )}
        </div>
    );
};

export default DesktopMenu;