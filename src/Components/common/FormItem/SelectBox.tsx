import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  inputField: {
    width: '100%',

    '& label': {
      fontSize: '14px',
    }
  },
})


type selectItemTypes = {
  label: string,
  value: string,
}

type propTypes = {
  label: string,
  value?: any,
  onChange?: (event: SelectChangeEvent<string>) => void,
  items: Array<selectItemTypes>,
  size?: "small" | "medium",
  register?: any,
}

const SelectBox: React.FC<propTypes> = ({
  label,
  value,
  onChange,
  items,
  size = "small",
  register
}) => {

  const classes = useStyles();

  const renderValue = (selected: any) => {
    if (Array.isArray(selected)) {
      return selected
      .reduce((accu, item) => {
        const option = items.find((ele: any) => ele.value === item);
        if (option !== undefined) {
          return [...accu, option.label];
        }
        return accu;
      }, [])
      .join(", ");
    } else {
      const option = items.find((ele: any) => ele.value === selected);
      if (option !== undefined) {
        return option.label;
      }
      return '';
    }
  }

  return (
    <FormControl size={size} style={{maxWidth: '100%'}} className={`${classes.inputField}`}>
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label={label}
        value={value}
        onChange={onChange}
        renderValue={renderValue}
        {...register}
      >
        {
          items.map((item, index)=> (
            <MenuItem key={`selectbox-item-${index}-item-${item.label}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

export default SelectBox