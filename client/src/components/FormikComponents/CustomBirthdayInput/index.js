import React from "react";
import { DatePicker } from "@material-ui/pickers";

const CustomBirthdayInput = ({ form, field, label, ...props }) => {
  return (
    <DatePicker
      value={field.value}
      label={label}
      onChange={date => form.setFieldValue(field.name, date.toString())}
      {...props}
    />
  );
}

export default CustomBirthdayInput;
