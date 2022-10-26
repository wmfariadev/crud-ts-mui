import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ToolsList } from '../../shared/components'
import { DefaultLayout } from '../../shared/layouts'

export const ListCity: React.FC = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const search = useMemo(() => {
    return searchParams.get('busca') || ''
  }, [searchParams])

  return (
    <DefaultLayout
      title='Cidades'
      tools={<ToolsList
        textNewButton='Nova'
        showInputSearch
        showNewButton
        textSearch={search}
        onChangeTextSearch={texto => setSearchParams(
          {
            busca: texto
          },
          {
            replace: true
          }
        )}
      />}
    >

    </DefaultLayout>
  )
}