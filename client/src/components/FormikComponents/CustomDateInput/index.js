import React from "react";
import { DatePicker } from "@material-ui/pickers";

const CustomDateInput = ({ form, field, label, ...props }) => {
  return (
    <DatePicker
      value={field.value}
      label={label}
      onChange={date => form.setFieldValue(field.name, date)}
      {...props}
    />
  );
}

export default CustomDateInput;
