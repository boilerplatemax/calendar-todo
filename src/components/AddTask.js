import React,{useState} from 'react'
import {Button, TextField} from '@material-ui/core';
import { Autocomplete } from '@mui/material';


export default function AddTask({addNewTaskHandler, timeSlots, updateCreateTask}) {

  const [hasStartTime, setHasStartTime]=useState(false)

  function updateStartTime(value){
    updateCreateTask({ startTime: value })
    if(value&&value!='none'){
      setHasStartTime(true)
    }
    else{
      setHasStartTime(false)
    }
  
  }
  return (
    <div className='add-task'>
    <div className='add-task__add-task-holder'>
        <TextField
        id="outlined-basic"
        label="Task Name"
        variant="outlined"
        onChange={(e) => updateCreateTask({ name: e.target.value })}
        className='add-task__text-field'
        />

        <Button
        variant="contained"
        color="primary"
        onClick={()=>addNewTaskHandler()}
        className='add-task__add-task-button'>
            Add Task
        </Button>
    </div>
    <div className='add-task__row'>
    <Autocomplete
          id="start-time"
          options={timeSlots}
          defaultValue={timeSlots[0]}
          onChange={(event, value) => updateStartTime(value)}
          sx={{ width: '50%' }}
          renderInput={(params) => <TextField {...params} label="Start Time" />}
        />
          {hasStartTime&&<Autocomplete
          id="end-time"
          options={timeSlots}
          defaultValue={timeSlots[0]}
          onChange={(event, value) => updateCreateTask({ endTime: value })}
          sx={{ width: '50%' }}
          renderInput={(params) => <TextField {...params} label="End Time" />}
        />}
    </div>
    </div>
  )
}
