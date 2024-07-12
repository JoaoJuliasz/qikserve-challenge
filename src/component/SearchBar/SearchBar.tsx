import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import icon from '../../assets/icon/search.svg'

import style from './searchBar.module.css'

type Props = {
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ value, setValue }: Props) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <div className={style.container}>
            <img className={style.icon} src={icon} />
            <input className={style.input} type="text" onChange={handleChange}
                value={value} placeholder="Search menu items" />
        </div>
    );
};

export default SearchBar;