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
  value?: string,
  errorMessage?: string | undefined,
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
  register?: any,
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  errorMessage,
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
  register
}) => {
  const classes = useStyles();

  let inputProps = {}

  if (min || max) {
    inputProps = {
      min,
      max,
    }
  }

  let getError = errorMessage ? true : false;

  return (
    <TextField 
      className={`${classes.inputField}`}
      label={label} 
      variant={variant} 
      size={size}
      type={type}
      value={value}
      multiline={multiline}
      disabled={disabled}
      required={required}
      fullWidth={fullWidth}
      sx={styles}
      error={getError}
      helperText={errorMessage}
      {...register}
      InputProps={{
        inputProps: {
          ...inputProps,
        }
      }}
    />
  )
}

export default InputField