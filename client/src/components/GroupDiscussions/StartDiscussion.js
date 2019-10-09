import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function StartDiscussion() {
	return (
		<div>
			<img src='' alt=''/>
			<TextField
        id='outlined-full-width'
        label='Label'
        style={{ margin: 8 }}
        placeholder='Placeholder'
        helperText='Full width!'
        fullWidth
        margin='normal'
        variant='outlined'
        InputLabelProps={{
          shrink: true,
        }}
      />
			{/*Icon for message*/}
		</div>
	)
}
