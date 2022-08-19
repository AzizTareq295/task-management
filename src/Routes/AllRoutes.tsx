import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  LoginPage,
  DashboardPage,
  TasksPage,
  MembersPage,
  AddMemberPage,
  NotFoundPage,
  EditMemberPage,
  TasksPageEdit,
  TasksPageAdd,
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
          <Route path='members/add' element={<AddMemberPage />} />
          <Route path='members/:id' element={<EditMemberPage />} />
          <Route path='tasks/add' element={<TasksPageAdd />} />
          <Route path='tasks/:id' element={<TasksPageEdit />} />

        </Route>
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default AllRoutes