import React from "react";
import TextField from "@material-ui/core/TextField";

function CustomTextField({ form, field, label, ...props }) {
  return (
    <TextField
      name={field.name}
      value={field.value}
      onChange={e => form.setFieldValue(field.name, e.target.value)}
      label={label}
      {...props}
    />
  );
}

export default CustomTextField;
