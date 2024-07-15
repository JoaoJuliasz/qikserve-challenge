import { useMemo, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import Categories from "./component/ShopContent/Categories/Categories";
import Content from "./component/ShopContent/Content/Content";
import CartComponent from "./component/Cart/Cart";

import style from './body.module.css'

type Props = {
    menu: Menu
    primaryColour: string
}

const Body = ({ menu, primaryColour }: Props) => {
    const [searchValue, setSearchValue] = useState<string>("")

    const sections = useMemo(() => {
        return menu.sections.map(item => ({ title: item.name, image: item.images[0].image }))
    }, [menu])

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <SearchBar value={searchValue} setValue={setSearchValue} />
                <div className={style.cardWrapper}>
                    <div className={style.card} style={{ '--flex': 2 } as React.CSSProperties}>
                        <Categories sections={sections} primaryColour={primaryColour} />
                        <Content content={menu.sections} />
                    </div>
                    <div className={style.card} style={{ '--flex': 1 } as React.CSSProperties}>
                        <CartComponent />
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Body;