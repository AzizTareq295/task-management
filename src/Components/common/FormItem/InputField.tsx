import React from 'react'
import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  inputField: {
    width: '100%',

    '& label': {
      fontSize: '14px',
    }
  },
})

type InputFieldProps = {
  label: string,
  name: string,
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  error?: boolean,
  helperText?: string,
  type?: string,
  disabled?: boolean,
  required?: boolean,
  multiline?: boolean,
  size?: "small" | "medium",
  variant?: "outlined" | "standard" | "filled",
  styles?: object,
  fullWidth?: boolean,
  min?: number,
  max?: number,
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  onKeyPress,
  error,
  type = 'text',
  disabled = false,
  required = false,
  multiline = false,
  size = "small",
  variant ="outlined",
  styles,
  fullWidth = true,
  min,
  max,
}) => {

  const classes = useStyles();

  let inputProps = {}

  if (min || max) {
    inputProps = {
      min,
      max,
    }
  }

  return (
    <TextField 
      className={`${classes.inputField}`}
      label={label} 
      name={name}
      variant={variant} 
      size={size}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
      value={value}
      multiline={multiline}
      disabled={disabled}
      required={required}
      fullWidth={fullWidth}
      sx={styles}
      error={error}
      InputProps={{
        inputProps: {
          ...inputProps,
        }
      }}
    />
  )
}

export default InputField