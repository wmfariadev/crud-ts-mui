import { Box, Typography, useTheme, IconButton, Icon, useMediaQuery } from '@mui/material'
import { ReactNode } from 'react'

import { useDrawerContext } from '../contexts'

interface DefaultLayoutProps {
  children: ReactNode
  title: string
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, title }: DefaultLayoutProps) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { toogleDrawerOpen } = useDrawerContext()

  return (
    <Box height={'100%'} display='flex' flexDirection='column' gap={1}>
      <Box padding={1} display='flex' alignItems='center' height={theme.spacing(12)} gap={1}>
        {smDown && (
          <IconButton onClick={toogleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography variant='h5'>
          {title}
        </Typography>
      </Box>

      <Box>
        Barra de Ferramentas
      </Box>

      <Box>
        {children}
      </Box>

    </Box>
  )
}