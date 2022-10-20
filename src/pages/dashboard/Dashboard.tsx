import { Box } from '@mui/material'

import { DefaultLayout } from '../../shared/layouts'

export const Dashboard: React.FC = () => {
  return (
    <DefaultLayout title={'Dashboard'}>
      <Box>
        Olá mundo
      </Box>
    </DefaultLayout>
  )
}