import React from "react";
import { DatePicker } from "@material-ui/pickers";

const CustomDateInput = ({ form, field, ...props }) => {
  return (
    <DatePicker
      value={field.value}
      onChange={date => form.setFieldValue(field.name, date)}
      {...props}
    />
  )
}

export default CustomDateInput
