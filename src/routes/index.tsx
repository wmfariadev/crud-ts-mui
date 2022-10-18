import { Routes, Route, Navigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useAppThemeContext } from '../shared/contexts'

export const AppRoutes = () => {

  const { toogleTheme, themeName } = useAppThemeContext()

  return (
    <Routes>
      <Route path="/pagina-inicial" 
        element={<Button variant="contained" color="primary" onClick={toogleTheme}>{themeName === 'light' ? 'Dark' : 'Light'}</Button>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}