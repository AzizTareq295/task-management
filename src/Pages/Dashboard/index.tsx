import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  container:{
    height: '100%',
  },
  paperItem: {
    padding: '10px',
    minHeight: '100px',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'cadetblue !important',

      '& h6': {
        color: 'white',
      }
    }
  }
})

const Dashboard: React.FC = () => {

  const classes = useStyles()

  return (
    <Box>
      <Grid className={classes.container} container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <Paper elevation={4} className={classes.paperItem}>
            <Link to={'/tasks'} style={{textDecoration: 'none'}}>
              <Typography variant="h6" align="center">Tasks</Typography>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={4} className={classes.paperItem}>
            <Link to={'/members'} style={{textDecoration: 'none'}}>
              <Typography variant="h6" align="center">Members</Typography>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard