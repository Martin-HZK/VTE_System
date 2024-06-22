import React from 'react'
import { Outlet } from 'react-router-dom'

const StarterLayout = () => {
  return (
    <main>
        <Outlet />
    </main>
  )
}

export default StarterLayout