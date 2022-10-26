import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { useDrawerContext } from '../shared/contexts'
import { Dashboard, ListCity } from '../pages'

export const AppRoutes = () => {

  const { setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Dashboard',
        path: 'dashbord',
        icon: 'home'
      },
      {
        label: 'Cidades',
        path: 'cities',
        icon: 'location_city'
      },
    ])
  }, [])

  return (
    <Routes>
      <Route path="/dashbord" element={<Dashboard />} />
      <Route path="/cities" element={<ListCity />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}