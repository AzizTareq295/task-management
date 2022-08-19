import React, { useEffect, useState } from 'react'
import { TableRow, TableCell, Paper, Box, Grid, Typography, IconButton, Tooltip } from '@mui/material'
import ThemeTable from 'Components/common/Table'
import { Link } from 'react-router-dom'
import { ITask } from 'Components/interface/Task'
import server from 'Config/ApiConfig'
import { IMember } from 'Components/interface/Member'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationDailog from 'Components/common/Dailog/ConfirmationDailog'

interface TasksType extends ITask {
  member: IMember
}

const Tasks: React.FC = () => {

  const [data, setData] = useState<TasksType[]>([])

  const [openDailog, setOpenDailog] = useState(false)
  const [selectedMember, setSelectedMember] = useState<number| null>(null)

  useEffect(()=> {
    server.get('/tasks?_expand=member').then(res => {
      setData(res.data)
    })
  }, [])


  const tableRows = data?.map((row: TasksType, index: number) => (
    <TableRow
      key={row.title}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>
        {index+1}
      </TableCell>
      <TableCell>
        {row?.title}
      </TableCell>
      <TableCell>
        {row?.createdAt}
      </TableCell>
      <TableCell>
        {
          row?.member ? 
            <p key={`${row.member.name}-${index}`}>{row?.member?.name}</p>
          : <p>No user assigned</p>
        }
      </TableCell>
      <TableCell>
        <Box display='flex' gap={2}>
          <Tooltip title="Edit">
            <Link to={`/tasks/${row.id}`} style={{width: '40px', height: '40px', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <EditIcon />
            </Link>
          </Tooltip>
          <Tooltip title={'Delete'}>
            <IconButton aria-label="delete" onClick={()=> handleRemove(row.id)}>
              <DeleteIcon />
            </IconButton>

          </Tooltip>
        </Box>
      </TableCell>
    </TableRow>
  ))

  const tableHeaderTitles = ["Sl","Title","Creation Date","Assigned To","Action"];

  const handleRemove = (id: number) => {
    setSelectedMember(id)
    setOpenDailog(true)
  }

  const removeData = () => {
    server.delete(`/tasks/${selectedMember}`).then(res => {
      const newData = data.filter(row => row.id !== selectedMember)
      setData(newData)
      setOpenDailog(false)
    })

  }

  return (
    <Paper>
      <Grid container justifyContent={"space-between"} p={4}>
        <Typography variant='h6'>Tasks</Typography>
        <Box color={"primary"}>
          <Link to="/tasks/add" >Add New Task</Link>
        </Box>
      </Grid>
      <Box p={2}>
        <ThemeTable tableHeaders={tableHeaderTitles} rows={tableRows} />
      </Box>
      <ConfirmationDailog title='Delete Task' content='Are you want to delete the tasks?' setOpenDailog={setOpenDailog} openDailog={openDailog} onRemove={removeData} />
    </Paper>
  )
}

export default Tasks