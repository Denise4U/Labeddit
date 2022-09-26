import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(false)

    const getData = () => {
        setIsLoading(true)
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        axios
        .get(url, headers)
        .then((res) => {
            setIsLoading(false)
            setData(res.data)
        })
        .catch((err) => {
            setIsLoading(false)
            console.log(err.response)
        })
    }

    useEffect(() => {
        getData()
    }, [url])

    return [data, getData, isLoading]
}

export default useRequestData 