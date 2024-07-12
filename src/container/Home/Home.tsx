import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch/useFetch";

const Home = () => {
    const [venue, setVenue] = useState({} as Venue)

    const { fetchData } = useFetch()

    const getData = async () => {
        const data = await fetchData<Venue>('/api/challenge/venue/9')
        setVenue(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
        </div>
    );
};

export default Home;