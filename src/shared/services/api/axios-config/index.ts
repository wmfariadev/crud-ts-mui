import axios from 'axios'
import { responseInterceptors, errorInterceptors } from './interceptors'

const BASE_URL = 'http://localhost:3333'

const Api = axios.create({
  baseURL: BASE_URL
})

Api.interceptors.response.use(
  (response) => responseInterceptors(response),
  (response) => errorInterceptors(response)
)

export { Api }