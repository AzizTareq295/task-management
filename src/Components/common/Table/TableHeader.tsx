import React from 'react'
import { TableCell, TableHead, TableRow } from '@mui/material'

type HeaderProps = {
  columns: string[],
  align?: string,
  fontSize?: string,
  fontWeight?: string,
  key?: string
}

const TableHeader: React.FC<HeaderProps> = ({columns, align, fontSize, fontWeight, key}) => {

  const headerStyle = {
    fontSize: fontSize || '14px',
    fontWeight: fontWeight || '600',
    textAlign: align || 'left'
  }

  return (
    <TableHead>
      <TableRow>
        {
          columns.map((column, index) => (
            <TableCell key={`${key}-index-${index}`} sx={headerStyle}>{column}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  )
}

export default TableHeader