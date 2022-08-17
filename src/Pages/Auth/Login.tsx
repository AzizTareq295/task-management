import React from 'react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import InputField from 'Components/common/FormItem/InputField'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
  },
  paper: {
    padding: '15px',
  }
})

const Login: React.FC = () => {

  const classes = useStyles()

  return (
    <Box >
      <Grid container className={classes.container} justifyContent={"center"} alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant='h5' align='center' mb={3}>Login</Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputField
                    label="Username"
                    onChange={(e) => {console.log(e.target.value)}}
                    name="username"
                    type='text'
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    label="Password"
                    onChange={(e) => {console.log(e.target.value)}}
                    name="password"
                    type='password'
                  />
                </Grid>
                <Grid item xs={12} textAlign="right">
                  <Button variant='contained' color="primary" type='submit'>Login</Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login