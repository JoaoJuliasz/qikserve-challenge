import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

import style from './body.module.css'

type Props = {

}

const Body = () => {
    const [searchValue, setSearchValue] = useState<string>("")

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <SearchBar value={searchValue} setValue={setSearchValue} />
                <div>
                    content
                </div>
            </div>
        </div>
    )
};

export default Body;