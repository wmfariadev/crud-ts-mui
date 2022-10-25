import axios from 'axios'

import { Environment } from '../../../environment'
import { responseInterceptors, errorInterceptors } from './interceptors'

const Api = axios.create({
  baseURL: Environment.URL_BASE
})

Api.interceptors.response.use(
  (response) => responseInterceptors(response),
  (response) => errorInterceptors(response)
)

export { Api }