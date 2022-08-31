import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'

const cookies = Cookies.get()

export const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    Authorization: `Bearer ${cookies['v2go.token']}`,
  },
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    console.log(error.message)
  },
)
