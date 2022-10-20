import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { useDrawerContext } from '../shared/contexts'
import { Dashboard } from '../pages/dashboard/Dashboard'

export const AppRoutes = () => {

  const { setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Dashboard',
        path: 'dashbord',
        icon: 'home'
      }])
  }, [])

  return (
    <Routes>
      <Route path="/dashbord" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}