import React from 'react'

function CustomFileInput({ form, field, label, ...props }) {
  return (
    <input
			type='file'
      name={field.name}
      value={field.value}
      onChange={e => form.setFieldValue(field.name, e.target.files[0])}
      label={label}
      {...props}
    />
  )
}

export default CustomFileInput
