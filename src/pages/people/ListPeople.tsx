import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import { ToolsList } from '../../shared/components'
import { DefaultLayout } from '../../shared/layouts'
import { PeopleService, IListPeople } from '../../shared/services/api/people/PeopleService'
import { useDebouce } from '../../shared/hooks/index'

export const ListPeople: React.FC = () => {
  const { debounce } = useDebouce(2000)

  const [searchParams, setSearchParams] = useSearchParams()
  const [people, setPeople] = useState<IListPeople[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const search = useMemo(() => {
    return searchParams.get('busca') || ''
  }, [searchParams])

  useEffect(() => {
    // if (search.length <= 5) return 
    // const getAll = async () => {
    //   const { data } = await PeopleService.getAll()
    // }

    // getAll()

    debounce(() => {
      setIsLoading(true)

      PeopleService.getAll(1, search).then((result) => {
        setIsLoading(false)

        if (result instanceof Error) {
          alert(result.message)
          return
        }

        setPeople(result.data)
        setTotalCount(result.totalCount)
      })
    })

  }, [search])

  return (
    <DefaultLayout
      title='Pessoas'
      tools={<ToolsList
        textNewButton='Nova'
        showInputSearch
        showNewButton
        textSearch={search}
        onChangeTextSearch={texto => setSearchParams({ busca: texto }, { replace: true })}
      />}
    >


      <TableContainer component={Paper} variant='outlined' sx={{ m: 1, width: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ações</TableCell>
              <TableCell>Nome Completo</TableCell>
              <TableCell>Idade</TableCell>
              <TableCell>E-Mail</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {people.map(item => (
              <TableRow key={item.id}>
                <TableCell></TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </DefaultLayout>
  )
}