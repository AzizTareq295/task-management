import React from 'react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import InputField from 'Components/common/FormItem/InputField'
import { makeStyles } from '@mui/styles'
import { useForm } from "react-hook-form";
import { IUser } from 'Components/interface/User';
import { authentication } from './slice/AuthAction';
import { useAppDispatch } from 'Hooks/reduxHelper';

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

  const dispatch = useAppDispatch()

  const { register, handleSubmit, setError, formState: { errors } } = useForm<IUser>();

  const onSubmit = (data:IUser) => {
    if (data.username === 'admin' && data.password === 'admin') {
      dispatch(authentication(data))
    }
    else{
      setError("username", {
        type: "manual",
        message: "Username or password is incorrect"
      });
    }
  }

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
                    register={register("username", { required: {value: true, message: "Username is required"} })}
                    type='text'
                    errors={errors?.username}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    label="Password"
                    type='password'
                    register={register("password", { required: {value: true, message: "Password is required"} })}
                    errors={errors?.password}
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