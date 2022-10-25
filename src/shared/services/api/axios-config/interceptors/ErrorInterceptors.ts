import { AxiosError } from 'axios'

export const errorInterceptors = (error: AxiosError) => {

  if (error.message === 'Network Error') return Promise.reject(new Error('Erro de Conexão'))

  if (error.response?.status === 401) return Promise.reject(new Error('Usuário sem permissão'))

  return Promise.reject(error)
}