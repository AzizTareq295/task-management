import React from 'react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import InputField from 'Components/common/FormItem/InputField'
import { makeStyles } from '@mui/styles'
import { useForm } from "react-hook-form";

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

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data:any) => console.log(data);

  console.log(errors)

  return (
    <Box >
      <Grid container className={classes.container} justifyContent={"center"} alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={2} className={classes.paper}>
            <Typography variant='h5' align='center' mb={3}>Login</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputField
                    label="Username"
                    register={register("username", { required: {value: true, message: "Username is required"}, })}
                    type='text'
                    errorMessage={errors!.username!.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    label="Password"
                    type='password'
                    register={register("password", { required: {value: true, message: "Password is required"} })}
                    errorMessage={errors!.password!.message}
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