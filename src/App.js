import React, { useEffect, useState } from 'react';
import CalendarComponent from './components/CalendarComponent';
import PlannerComponent from './components/PlannerComponent';
import Navigation from './components/Navigation';
import uuid from 'uuid-v4'
import './CSS/App.css';

export const CalendarContext = React.createContext()

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const STORED_TASKS = localStorage.getItem('scheduler.tasks')

function App() {
  //state and context required for calendar
  const [value, onChange] = useState(new Date());
  const CalendarContextValue={value, onChange}

  const[formattedDate,setFormattedDate]=useState('')
  //current tab used for conditional rendering
  const [currentTab, setCurrentTab] =useState(1)
  //tasks are not editable in the last tab so we need a state to determine if task is editable
  const [editable, setEditable]=useState(true)
  //if there are no stored tasks then set tasks to default task
  const [tasks, setTasks]=useState(STORED_TASKS===null?[
    {
      name:'Add a new task!',
      dueDate:formatDueDate(),
      id:uuid(),
      startTime:'none',
      endTime:'none',
      completed:false
    }
  ]:JSON.parse(STORED_TASKS))
  
  useEffect(()=>{
    currentTab===2?setEditable(false):setEditable(true)
  },[currentTab])
  function navigateToTab(tabIndex){
    setCurrentTab(tabIndex)
  }
  useEffect(()=>{
    setCurrentTab(1)
    setFormattedDate(value.toLocaleDateString("en-US",dateOptions))
  },[value])
  useEffect(()=>{
    setStoredTasks()
  },[tasks])

  function formatDueDate(){
  return`${value.getMonth()}${value.getDate()}${value.getFullYear()}`
  }
  function setStoredTasks(){
    localStorage.setItem('scheduler.tasks', JSON.stringify(tasks))
    console.log(tasks)
  }
  return (
    <div className="App">
      <Navigation navigateToTab={navigateToTab} currentTab={currentTab}/>
      <div className='app_content'>
      <CalendarContext.Provider value={CalendarContextValue}>
        {currentTab===0&&<CalendarComponent setCurrentTab={setCurrentTab}/>}  
      </CalendarContext.Provider>
      {(currentTab!=0)&&
      <PlannerComponent
      date={value}
      tasks={tasks}
      setTasks={setTasks}
      formattedDate={formattedDate}
      dueDate={formatDueDate()}
      editable={editable}
      setStoredTasks={setStoredTasks}
      />
      }

      </div>
    </div>
  );
}

export default App;
