import { useEffect, useMemo, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

import style from './body.module.css'
import Categories from "./component/Categories/Categories";

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
                    <div className={style.card}>
                        <Categories sections={sections} primaryColour={primaryColour} />
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Body;