
import { ToolsList } from '../../shared/components'

import { DefaultLayout } from '../../shared/layouts'

export const Dashboard: React.FC = () => {
  return (
    <DefaultLayout title={'Dashboard'} tools={(<ToolsList showInputSearch showNewButton />)}>
    </DefaultLayout>
  )
}