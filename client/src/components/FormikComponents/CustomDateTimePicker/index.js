import React from 'react'
import { DateTimePicker } from '@material-ui/pickers'

const CustomDateTimePicker = ({ form, field, ...props }) => {
  return (
    <DateTimePicker
      value={field.value}
      onChange={date => form.setFieldValue(field.name, date)}
      {...props}
    />
  )
}

export default CustomDateTimePicker
