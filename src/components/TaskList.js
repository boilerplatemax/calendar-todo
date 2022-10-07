import React from 'react'
import uuid from 'uuid-v4'
import Task from './Task'

export default function TaskList(props) {
  const {tasks, dueDate,deleteTaskHandler, editTaskHandler, toggleTaskHandler, editable, handleTaskChange, timeSlots} = props

  
  return (
    <>
        {
        tasks&&tasks.filter(task=>task.completed===!editable).map((task)=>{
            return(<Task
              task={task}
              dueDate={dueDate}
              deleteTaskHandler={deleteTaskHandler}
              editTaskHandler={editTaskHandler}
              toggleTaskHandler={toggleTaskHandler}
              editable={editable}
              handleTaskChange={handleTaskChange}
              timeSlots={timeSlots}
              />)
              
        })
        }
    </>
  )
}
