import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { useDrawerContext } from '../shared/contexts'
import { Dashboard, ListPeople } from '../pages'

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
        label: 'Pessoas',
        path: 'people',
        icon: 'people'
      },
    ])
  }, [])

  return (
    <Routes>
      <Route path="/dashbord" element={<Dashboard />} />
      <Route path="/people" element={<ListPeople />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}