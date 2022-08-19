import React, { useEffect, useState } from 'react'
import { Button, Grid, Snackbar, Alert } from '@mui/material'
import InputField from 'Components/common/FormItem/InputField'
import { useForm } from "react-hook-form";
import server from 'Config/ApiConfig';
import { useNavigate, useParams } from 'react-router-dom';
import SelectBox from 'Components/common/FormItem/SelectBox';

type TaskField = {
  title: string;
  description: string;
  memberId: string;
}

type PageProps = {
  data?: TaskField;
}

const Form: React.FC<PageProps> = ({data}) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TaskField>();

  const [open, setOpen] = useState(false);
  const [members, setMembers] = useState([]);

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(()=> {
    if(data) {
      reset(data)
    }
  }, [data])

  useEffect(()=> {
    server.get('/members').then(res => {
      let members = res.data.reduce((acc:any, curr: any) => {
        return acc = [...acc, {value: curr.id, label: curr.name}]
      }, [])
      setMembers(members)
    })
  }, [])

  const onSubmit = (values:TaskField) => {
    if (data) {
      updateData(values)
    }
    else{
      createData(values)
    }
  }

  const createData = (data:TaskField) => {
    let date = new Date()
    const formData = {...data, createdAt: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}
    server.post('/tasks', formData)
      .then(res => {
        setOpen(true)
        navigate('/tasks', {replace: true})
      })
  }

  const updateData = (data:TaskField) => {
    let date = new Date()
    const formData = {...data, createdAt: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}
    server.put(`/tasks/${id}`, formData)
      .then(res => {
        setOpen(true)
        navigate('/tasks', {replace: true})
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
            label="Title"
            register={register("title", { required: {value: true, message: "Title is required"} })}
            type='text'
            errors={errors?.title}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            label="description"
            type='text'
            register={register("description")}
          />
        </Grid>
        <Grid item xs={12}>
          <SelectBox
            label="Assign To"
            register={register("memberId")}
            value={data?.memberId}
            items={members}
          />
        </Grid>
        <Grid item xs={12} textAlign="right">
          <Button variant='contained' color="primary" type='submit'>Submit</Button>
        </Grid>
      </Grid>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully created tasks
        </Alert>
      </Snackbar>
    </form>
  )
}

export default Form