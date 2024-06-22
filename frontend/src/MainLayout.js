import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigator from './components/Navigator'
const MainLayout = () => {
  return (
    <main>
        <Navigator />
        <Outlet />
    </main>
  )
}

export default MainLayout