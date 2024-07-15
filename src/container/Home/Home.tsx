import { useEffect, useState } from "react"
import Body from "../../component/Body/Body"

import Header from "../../component/Header/Header"
import Spinner from "../../component/Spinner/Spinner"
import { HomeProvider } from "../../Context/HomeContext"

import { useFetch } from "../../hooks/useFetch/useFetch"

import style from './home.module.css'

const Home = () => {
    const [menu, setMenu] = useState({} as Menu)
    const [venue, setVenue] = useState({} as Venue)
    const [cart, setCart] = useState<CartItem[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const { fetchData } = useFetch()

    const getData = () => {
        Promise.all([fetchData<Venue>('/api/challenge/venue/9'), fetchData<Menu>('/api/challenge/menu')])
            .then(res => {
                setVenue(res[0])
                setMenu(res[1])
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) return (
        <div className={style.loadWrapper}>
            <Spinner />
        </div>
    )

    return (
        <HomeProvider value={{ menu, venue, cart, setCart }}>
            <div className={style.container}>
                <Header bgColor={venue.webSettings.navBackgroundColour} bannerImg={venue.webSettings.bannerImage} />
                <Body menu={menu} primaryColour={venue.webSettings.primaryColour} />
            </div>
        </HomeProvider>
    )
}

export default Home