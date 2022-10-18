import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { Box } from '@mui/system'
import { FC, ReactNode } from 'react'
import { useDrawerContext } from '../../contexts'

interface IMenuLateralProps {
  children?: ReactNode
}

export const MenuLateral: FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { isDrawerOpen, toogleDrawerOpen } = useDrawerContext()

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toogleDrawerOpen}>
        <Box
          width={theme.spacing(28)}
          height='100%'
          display='flex'
          flexDirection='column'>
          <Box
            width='100%'
            height={theme.spacing(20)}
            display='flex'
            alignItems='center'
            justifyContent='center'>
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt="Remy Sharp"
              src="https://th.bing.com/th/id/R.542778bba00f7eda8ad313401860891f?rik=VX1J4zO5PUN6Cg&pid=ImgRaw&r=0&sres=1&sresct=1" />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component='nav'>
              <ListItemButton selected={true}>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
            </List>
          </Box>

        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}