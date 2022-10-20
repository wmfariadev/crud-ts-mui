import { Box, Typography, useTheme, IconButton, Icon, useMediaQuery } from '@mui/material'
import { ReactNode } from 'react'

import { useDrawerContext } from '../contexts'

interface DefaultLayoutProps {
  children: ReactNode
  title: string
  tools?: ReactNode
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, title, tools }: DefaultLayoutProps) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const { toogleDrawerOpen } = useDrawerContext()

  return (
    <Box height={'100%'} display='flex' flexDirection='column' gap={1}>
      <Box padding={1} display='flex' alignItems='center' height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} gap={1}>
        {smDown && (
          <IconButton onClick={toogleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          whiteSpace='nowrap'
          overflow='hidden'
          textOverflow='ellipsis'>
          {title}
        </Typography>
      </Box>

      {tools && (
        <Box>
          {tools}
        </Box>
      )}

      <Box flex={1} overflow='auto'>
        {children}
      </Box>

    </Box>
  )
}