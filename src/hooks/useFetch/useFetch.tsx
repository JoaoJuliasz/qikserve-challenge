export const useFetch = () => {
    async function fetchData<T>(path: string): Promise<T> {
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const targetUrl = encodeURIComponent(`https://cdn-dev.preoday.com${path}`);
        try {
            const response = await fetch(`${proxyUrl}${targetUrl}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json() as { contents: string }
            const parsedData: T = JSON.parse(data.contents);
            return parsedData
        } catch (error) {
            console.error('Error fetching data:', error)
            throw error
        }
    }

    return { fetchData }
}