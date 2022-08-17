import React, { useMemo } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHeader from './TableHeader';

const tableContainerStyle = {
  border: '1px solid #e0e0e0'
}

type TableProps = {
  rows: React.ReactNode[],
  tableHeaders: string[],
}


const ThemeTable: React.FC<TableProps> = ({rows, tableHeaders}) => {
  
  const tableRows = useMemo(() => rows, [rows])

  return (
    <TableContainer sx={tableContainerStyle}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeader columns={tableHeaders}/>
        <TableBody>
          {tableRows}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ThemeTable