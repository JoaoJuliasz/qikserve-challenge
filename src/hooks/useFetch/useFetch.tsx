import { useState } from "react"

export const useFetch = () => {
    const [loading, setLoading] = useState<boolean>(true)

    async function fetchData<T>(path: string): Promise<T> {
        try {
            const response = await fetch(path)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data: T = await response.json()
            return data
        } catch (error) {
            console.error('Error fetching data:', error)
            throw error
        } finally {
            setLoading(false)
        }
    }

    return { loading, fetchData }
}