import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormHelperText from "@material-ui/core/FormHelperText";

function CustomTextField({ form, field, type, label, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const { touched, errors } = form;

  if (type === "password") {
    return (
      <FormControl error={touched[field.name] && errors[field.name]} {...props}>
        <Input
          id={field.name}
          type={showPassword ? "text" : "password"}
          onChange={e => form.setFieldValue(field.name, e.target.value)}
          error={touched[field.name] && errors[field.name]}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={e => e.preventDefault()}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          {...props}
        />
        {touched[field.name] && errors[field.name] && (
        <FormHelperText>{errors[field.name]}</FormHelperText>
      )}
      </FormControl>
    );
  }
  return (
    <FormControl error={touched[field.name] && errors[field.name]} {...props}>
      <Input
        id={field.name}
        name={field.name}
        value={field.value}
        onChange={e => form.setFieldValue(field.name, e.target.value)}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <FormHelperText>{errors[field.name]}</FormHelperText>
      )}
    </FormControl>
  );
}

export default CustomTextField;
