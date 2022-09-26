import axios from "axios"
import { baseURL } from "../constants/urls"

export const createPost = (form, cleanFields, getPosts, setIsLoading) => {
    setIsLoading(true)
    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }

    const body = form

    axios.post(`${baseURL}/posts`, body, headers)
    .then((res) => {
        alert(res.data)
        cleanFields()
        setIsLoading(false)
        getPosts()
    })
    .catch((err) => {
        setIsLoading(false)
        console.log(err.response.data.message, err.response.data.errors)
    })
}

export const createComment = (id, form, cleanFields, getComments, setIsLoading) => {
    setIsLoading(true)
    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }

    const body = form

    axios.post(`${baseURL}/posts/${id}/comments`, body, headers)
    .then((res) => {
        alert(res.data)
        cleanFields()
        setIsLoading(false)
        getComments()
    })
    .catch((err) => {
        setIsLoading(false)
        console.log(err.response.data.message, err.response.data.errors)
    })
}