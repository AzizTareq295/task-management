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

type MemberFields = {
  name: string;
  email: string;
}



const Edit: React.FC = () => {

  const { id } = useParams()

  const [data, setData] = useState<MemberFields>({
    name: '',
    email: ''
  })

  const classes = useStyles()

  useEffect(()=> {
    server.get(`/members/${id}`).then(res => {
      setData({name: res.data?.name, email: res.data?.email})
    })
  }, [id])

  

  return (
    <Box >
      <Grid container className={classes.container} justifyContent={"center"} alignItems="center">
        <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant='h5' align='center' mb={3}>Edit Member</Typography>
            <Form data={data} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Edit