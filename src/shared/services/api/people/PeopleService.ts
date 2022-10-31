import { Environment } from '../../../environment'
import { Api } from '../axios-config'

export interface IPersonDetail {
  id: number,
  name: string,
  age: number,
  cityId: number,
  email: string
}

export interface IListPeople {
  id: number,
  name: string,
  age: number,
  cityId: number,
  email: string
}

export type TPersonWithTotalCount = {
  data: IListPeople[]
  totalCount: number
}

const getAll = async (page = 1, filter = ''): Promise<TPersonWithTotalCount | Error> => {

  try {
    const basePath = `/people?_page=${page}&_limit=${Environment.MAX_ROWS}&name_like=${filter}`
    const { data, headers } = await Api.get(basePath)

    // eslint-disable-next-line no-debugger
    // debugger

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Environment.MAX_ROWS)
      }
    }

    return new Error('Erro ao consultar registros')
  } catch (error) {
    console.error(error)

    return new Error((error as { message: string }).message || 'Erro ao consultar registros')
  }
}

const getById = async (id: number): Promise<IPersonDetail | Error> => {
  try {
    const { data } = await Api.get(`/people/${id}`)

    if (data) return data

    return new Error('Erro ao consultar registros')
  } catch (error) {
    console.error(error)

    return new Error((error as { message: string }).message || 'Erro ao consultar registros')
  }
}
const create = async (payload: Omit<IPersonDetail, 'id'>): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IPersonDetail>('/pessoa', payload)

    if (data) return data.id

    return new Error('Erro ao consultar registros')
  } catch (error) {
    console.error(error)

    return new Error((error as { message: string }).message || 'Erro ao consultar registros')
  }
}
const updateById = async (id: number, payload: IPersonDetail): Promise<void | Error> => {
  try {
    await Api.put(`/people/${id}`, payload)
  } catch (error) {
    console.error(error)

    return new Error((error as { message: string }).message || 'Erro ao consultar registros')
  }
}
const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/people/${id}`)
  } catch (error) {
    console.error(error)

    return new Error((error as { message: string }).message || 'Erro ao consultar registros')
  }
}

export const PeopleService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
}