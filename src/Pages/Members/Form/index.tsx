import React, { useEffect, useState } from 'react'
import { Button, Grid, Snackbar, Alert } from '@mui/material'
import InputField from 'Components/common/FormItem/InputField'
import { useForm } from "react-hook-form";
import server from 'Config/ApiConfig';
import { useNavigate, useParams } from 'react-router-dom';

type MemberFields = {
  name: string;
  email: string;
}

type PageProps = {
  data?: MemberFields;
}

const Form: React.FC<PageProps> = ({data}) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<MemberFields>();

  const [open, setOpen] = useState(false);

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(()=> {
    if(data) {
      reset(data)
    }
  }, [data])

  const onSubmit = (values:MemberFields) => {
    if (data) {
      updateData(values)
    }
    else{
      createData(values)
    }
  }

  const createData = (data:MemberFields) => {
    server.post('/members', data)
      .then(res => {
        setOpen(true)
        navigate('/members', {replace: true})
      })
  }

  const updateData = (data:MemberFields) => {
    server.put(`/members/${id}`, data)
      .then(res => {
        setOpen(true)
        navigate('/members', {replace: true})
      })
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputField
            label="Name"
            register={register("name", { required: {value: true, message: "Name is required"} })}
            type='text'
            errors={errors?.name}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            label="Email"
            type='email'
            register={register("email")}
          />
        </Grid>
        <Grid item xs={12} textAlign="right">
          <Button variant='contained' color="primary" type='submit'>Submit</Button>
        </Grid>
      </Grid>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully created member
        </Alert>
      </Snackbar>
    </form>
  )
}

export default Form