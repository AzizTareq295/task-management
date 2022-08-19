import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Form from './Form';

const useStyles = makeStyles({
  container: {
    minHeight: '70vh',
  },
  paper: {
    padding: '15px',
    
  }
})



const Add: React.FC = () => {

  const classes = useStyles()

  

  return (
    <Box >
      <Grid container className={classes.container} justifyContent={"center"} alignItems="center">
        <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant='h5' align='center' mb={3}>Add New Task</Typography>
            <Form />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Add