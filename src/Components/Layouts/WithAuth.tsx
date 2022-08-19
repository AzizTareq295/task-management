import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from 'Components/Shared/Navbar'
import Footer from 'Components/Shared/Footer'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  container:{
    display: 'grid',
    gridTemplateRows: '68px auto 50px',
    minHeight: '100vh',
  }
})

const WithAuth: React.FC = () => {

  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <NavBar />
      <Outlet />
      <Footer />
    </Box>
  )
}

export default WithAuth