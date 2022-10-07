import React,{useState} from 'react'
import {Button, Checkbox, IconButton, TextField, Fab} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Autocomplete } from '@mui/material';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';

export default function Task(props) {
  const [editing, setEditing]=useState(false)
  const [newTaskName, setNewTaskName]=useState('')
  const{task,dueDate,deleteTaskHandler, toggleTaskHandler, editable, handleTaskChange, timeSlots}=props

function editHandler(){
  setEditing(prev=>!prev)
}
function deleteHandler(){
  setEditing(false)
  setNewTaskName('')
  deleteTaskHandler(task.id)
}
function handleChange(changes) {
  handleTaskChange(task.id, { ...task, ...changes })
}
  return (
    <>{task.dueDate===dueDate&&
      <div className='task'>
        <div className='task__row'>
      <Checkbox
      checked={task.completed}
      color="primary"
      className='task__task-checkbox'
      onChange={()=>toggleTaskHandler(task.id)}
      />
      
        {editing&&editable?<TextField id="outlined-basic" label={task.name} variant="outlined" onChange={e => handleChange({ name: e.target.value })} className='task__task-input-edit'/>:
        <div className={task.completed?'task__task-title complete':'task__task-title'}>{task.name}</div>
        }
                <div className='task__task-buttons'>
        {editable&&<Fab color={editing?'primary':'primary'} aria-label="add" onClick={editHandler}>
          {editing?<CheckIcon/>:<EditIcon/>}
          </Fab>}
        <IconButton
        aria-label="delete"
        onClick={deleteHandler}>
          <DeleteIcon />
        </IconButton>
        </div>
      </div>
      <div className='task__row'>
        {editing&&editable?<>
          <Autocomplete
          id="start-time"
          options={timeSlots}
          value={task.startTime}
          onChange={(event, value) => handleChange({ startTime: value })}
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} label="Start Time" />}
        />
          {task.startTime&&task.startTime!='none'&&<Autocomplete
          id="end-time"
          options={timeSlots}
          value={task.endTime}
          onChange={(event, value) => handleChange({ endTime: value })}
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} label="End Time" />}
        />}
        </>:
        <div>{task.startTime}{task.endTime&&task.endTime!='none'&&(' - '+task.endTime)}</div>
      }

        
      </div>
    </div>
    }</>
  )
}
