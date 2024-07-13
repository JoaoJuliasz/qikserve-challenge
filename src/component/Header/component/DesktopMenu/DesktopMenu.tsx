import { useState } from 'react';
import { MenuOption } from '../../header.type';
import style from '../../header.module.css'

const menuOptions: MenuOption[] = ["MENU", "ENTRAR", "CONTATO"]

const DesktopMenu = () => {
    const [selected, setSelected] = useState<MenuOption>("MENU")

    return (
        <div className={style.desktop}>
            {menuOptions.map(option =>
                <h4 key={option} className={`${style.item} ${selected === option ? style.selected : ''}`}
                    onClick={() => setSelected(option)}>{option}</h4>
            )}
        </div>
    );
};

export default DesktopMenu;