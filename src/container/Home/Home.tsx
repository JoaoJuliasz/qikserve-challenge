import { useEffect, useState } from "react"
import Body from "../../component/Body/Body"

import Header from "../../component/Header/Header"
import Spinner from "../../component/Spinner/Spinner"

import { useFetch } from "../../hooks/useFetch/useFetch"

import style from './home.module.css'

const Home = () => {
    const [venue, setVenue] = useState({} as Venue)

    const { loading, fetchData } = useFetch()

    const getData = async () => {
        const data = await fetchData<Venue>('/api/challenge/venue/9')
        setVenue(data)
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
        <div className={style.container}>
            <Header bgColor={venue.webSettings.navBackgroundColour} bannerImg={venue.webSettings.bannerImage} />
            <Body />
        </div>
    )
}

export default Home