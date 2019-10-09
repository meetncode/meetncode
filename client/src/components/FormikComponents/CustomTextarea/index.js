import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { Field } from 'apollo-engine-reporting-protobuf'

const CustomTextarea = ({ field, form, label, ...props }) => {
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <TextareaAutosize
        id={field.name}
        value={field.value}
        onChange={(e) => form.setFieldValue(field.name, e.target.value)}
        {...props}
      />
    </div>
  )
}

export default CustomTextarea
