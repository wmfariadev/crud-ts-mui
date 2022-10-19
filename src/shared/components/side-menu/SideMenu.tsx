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
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { useDrawerContext } from '../../contexts'

interface IListItemLinkProps {
  label: string
  icon: string
  to: string
  onClick?: () => void
}

const ListItemLink: FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {

  const navigate = useNavigate()
  const resolvedPath = useResolvedPath(to)
  const matchPath = useMatch({ path: resolvedPath.pathname, end: false })

  const handleClick = () => {
    navigate(to)
    onClick?.()
  }

  return (
    <ListItemButton selected={!!matchPath} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

interface ISideMenuProps {
  children?: ReactNode
}

export const SideMenu: FC<ISideMenuProps> = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { isDrawerOpen, toogleDrawerOpen, drawerOptions } = useDrawerContext()

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
              {drawerOptions.map((drawerOption, index) => {
                return (
                  <ListItemLink
                    key={index}
                    icon={drawerOption.icon}
                    label={drawerOption.label}
                    to={drawerOption.path}
                    onClick={smDown ? toogleDrawerOpen : undefined} />)
              })}
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