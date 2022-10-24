
import { DefaultLayout } from '../../shared/layouts'
import { ToolsDetail, ToolsList } from '../../shared/components'

export const Dashboard: React.FC = () => {
  return (
    <DefaultLayout
      title={'Dashboard'}
      tools={(
        // <ToolsList showInputSearch showNewButton />
        <ToolsDetail showSaveCloseButton />
      )}>
    </DefaultLayout>
  )
}