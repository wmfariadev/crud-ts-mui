import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { useDrawerContext } from '../shared/contexts'
import { Dashboard } from '../pages/dashboard/Dashboard'

export const AppRoutes = () => {

  const { setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página Inicial',
        path: 'home',
        icon: 'home'
      },
      {
        label: 'Dashboard',
        path: 'dashbord',
        icon: 'star'
      }])
  }, [])

  return (
    <Routes>
      <Route path="/home" element={<b>BEM VINDO AO SISTEMA</b>} />
      <Route path="/dashbord" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}