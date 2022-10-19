import { Routes, Route, Navigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useDrawerContext } from '../shared/contexts'
import { useEffect } from 'react'

export const AppRoutes = () => {

  const { toogleDrawerOpen, setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página Inicial',
        path: 'pagina-inicial',
        icon: 'home'
      },
      {
        label: 'Cadastro',
        path: 'cadastro',
        icon: 'form'
      },
      {
        label: 'Contato',
        path: 'contato',
        icon: 'letter'
      }])
  }, [])

  return (
    <Routes>
      <Route path="/pagina-inicial"
        element={<Button variant="contained" color="primary" onClick={toogleDrawerOpen}>Open Menu</Button>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}