import React from 'react'
import LocationPicker from '../../LocationPicker'


const CustomLocationPicker = ({ form, field, options, ...props }) => {
  return (
    <LocationPicker
      onChange={coordinates => form.setFieldValue(field.name, coordinates)}
      {...props}
    />

  )
}

export default CustomLocationPicker
