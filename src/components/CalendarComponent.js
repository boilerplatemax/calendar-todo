import React, { useEffect, useContext } from 'react';
import Calendar from 'react-calendar';
import { CalendarContext } from '../App';

export default function CalendarComponent() {
  
  const {value, onChange} = useContext(CalendarContext)
 
  return (
    
    <div className='calendar__calendar-holder'>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}
