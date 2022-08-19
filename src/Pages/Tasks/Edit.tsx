import React, { useEffect, useState } from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Form from './Form';
import { useParams } from 'react-router-dom'
import server from 'Config/ApiConfig';

const useStyles = makeStyles({
  container: {
    minHeight: '70vh',
  },
  paper: {
    padding: '15px',
    
  }
})


type TaskField = {
  title: string;
  description: string;
  memberId: string;
}


const Edit: React.FC = () => {

  const { id } = useParams()

  const [data, setData] = useState<TaskField>({
    title: '',
    description: '',
    memberId: ''
  })

  const classes = useStyles()

  useEffect(()=> {
    
    server.get(`/tasks/${id}`).then(res => {
      setData({title: res.data?.title, description: res.data?.description, memberId: res.data?.memberId})
    })
  }, [id])

  

  return (
    <Box >
      <Grid container className={classes.container} justifyContent={"center"} alignItems="center">
        <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant='h5' align='center' mb={3}>Edit Task</Typography>
            <Form data={data} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Edit