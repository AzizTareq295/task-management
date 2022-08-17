import React from 'react'
import { Outlet } from 'react-router-dom'

const WithOutAuth: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default WithOutAuth