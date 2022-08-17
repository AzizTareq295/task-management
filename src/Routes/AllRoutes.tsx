import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  LoginPage,
  DashboardPage,
  TasksPage,
  MembersPage,
  NotFoundPage,
} from 'Pages'
import ProtectedRoute from './ProtectedRoute'
import WithAuth from 'Components/Layouts/WithAuth'
import PublicRoute from './PublicRoute'

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route index element={<LoginPage />} />
      </Route>
      <Route path='/' element={<ProtectedRoute />}>
        <Route element={<WithAuth />}>
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='tasks' element={<TasksPage />} />
          <Route path='members' element={<MembersPage />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default AllRoutes