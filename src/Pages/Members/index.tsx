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

interface MemberTypes extends IMember {
  tasks: ITask[]
}

const Members: React.FC = () => {

  const [data, setData] = useState<MemberTypes[]>([])

  const [openDailog, setOpenDailog] = useState(false)
  const [selectedMember, setSelectedMember] = useState<number| null>(null)

  useEffect(()=> {
    server.get('/members?_embed=tasks').then(res => {
      setData(res.data)
    })
  }, [])


  const tableRows = data?.map((row: MemberTypes, index: number) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>
        {index+1}
      </TableCell>
      <TableCell>
        {row?.name}
      </TableCell>
      <TableCell>
        {row?.email}
      </TableCell>
      <TableCell>
        {
          row?.tasks?.length > 0 ? row.tasks.map((task: ITask, idx: number) => (
            <p key={`${row.name}-${idx}-${task.title}`}>{task.title}</p>
          ))
          : <p>No tasks</p>
        }
      </TableCell>
      <TableCell>
        <Box display='flex' gap={2}>
          <Tooltip title="Edit">
            <Link to={`/members/${row.id}`} style={{width: '40px', height: '40px', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
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

  const tableHeaderTitles = ["Sl","Name","Email","Assigned Task","Action"];

  const handleRemove = (id: number) => {
    setSelectedMember(id)
    setOpenDailog(true)
  }

  const removeData = () => {
    server.delete(`/members/${selectedMember}`).then(res => {
      const newData = data.filter(row => row.id !== selectedMember)
      setData(newData)
      setOpenDailog(false)
    })

  }

  return (
    <Paper>
      <Grid container justifyContent={"space-between"} p={4}>
        <Typography variant='h6'>Members</Typography>
        <Box color={"primary"}>
          <Link to="/members/add">Add New Member</Link>
        </Box>
      </Grid>
      <Box p={2}>
        <ThemeTable tableHeaders={tableHeaderTitles} rows={tableRows} />
      </Box>
      <ConfirmationDailog title='Delete Member' content='Are you want to delete the member?' setOpenDailog={setOpenDailog} openDailog={openDailog} onRemove={removeData} />
    </Paper>
  )
}

export default Members