import React from 'react'
import {TextField} from '@material-ui/core'
export default function NewTask() {
  return (
    <div>
        <h3>Task Name</h3>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  )
}
