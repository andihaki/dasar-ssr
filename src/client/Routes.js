import React from 'react'
import App from './App'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage from './pages/AdminsListPage'

//using react-router-config alpha style
//figure out which component would have rendered based on URL
export default [
  {
    ...App, //always display on page, cause there's no 'path:' defined
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users',
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
