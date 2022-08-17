import React from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

type propTypes = {
  label: string,
  name: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  disabled?: boolean,
  required?: boolean,
  items: Array<{
    label: string,
    value: string,
  }>
  row?: boolean,
}

const RadioBox: React.FC<propTypes> = ({
  label,
  name,
  onChange,
  disabled = false,
  required = false,
  items,
  row = true,
}) => {
  return (
    <FormControl required={required}>
      <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        row={row}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={name}
        onChange={onChange}
      >
        {
          items.map((item, index)=> (
            <FormControlLabel 
              key={`radio-item-${index}`} 
              value={item.value} 
              label={item.label}  
              control={<Radio />} 
              disabled={disabled}
            />
          ))
        }
      </RadioGroup>
    </FormControl>
  )
}

export default RadioBox