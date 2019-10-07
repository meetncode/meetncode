import React from 'react'
import TextField from '@material-ui/core/TextField'
import { MenuItem } from '@material-ui/core'

const CustomSelect = ({ form, field, options, ...props }) => {
  return (
    <TextField
      select
      value={field.value}
      onChange={e => {
        form.setFieldValue(field.name, e.target.value)
      }}
      {...props}
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default CustomSelect
