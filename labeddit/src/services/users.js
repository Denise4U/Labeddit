import axios from "axios"
import { baseURL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"

export const login  = (form, cleanFields, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    const body = form

    axios.post(`${baseURL}/users/login`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        cleanFields()
        setIsLoading(false)
        goToFeedPage(navigate)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        setIsLoading(false)
        console.log(err.response)
    })
}

export const signUp  = (form, cleanFields, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    const body = form

    axios.post(`${baseURL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        cleanFields()
        setIsLoading(false)
        goToFeedPage(navigate)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        setIsLoading(false)
        console.log(err.response)
    })
}