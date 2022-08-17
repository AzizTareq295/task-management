import React from 'react'
import { Outlet } from 'react-router-dom'

const WithAuth: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default WithAuth