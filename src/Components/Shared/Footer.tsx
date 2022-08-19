import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  footer:{
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    borderTop: '1px solid #e5e5e5',
  }
})

const Footer: React.FC = () => {

  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <p>&copy; Task Management</p>
    </footer>
  )
}

export default Footer