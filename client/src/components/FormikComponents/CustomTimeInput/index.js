import React from "react";
import { TimePicker } from "@material-ui/pickers";

const CustomTimeImput = ({ field, form, ...props}) => {
  return (
    <TimePicker
      value={field.value}
      onChange={time => form.setFieldValue(field.name, time)}
      {...props}
    />
  );
};

export default CustomTimeImput;
