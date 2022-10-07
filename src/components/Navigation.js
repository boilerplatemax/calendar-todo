import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CheckIcon from '@material-ui/icons/Check';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import CloseIcon from '@material-ui/icons/Close';

export default function Navigation({navigateToTab, currentTab}) {
    function changeTabHandler(event, newTabIndex){
        navigateToTab(newTabIndex)
    }
  return (
    <Paper>
        <Tabs
            value={currentTab}
            onChange={changeTabHandler}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
        >
        <Tab icon={<CalendarIcon />} label="CALENDAR" value={0}/>
        <Tab icon={<CloseIcon />} label="UNCOMPLETED" value={1}/>
        <Tab icon={<CheckIcon />} label="COMPLETED" value={2}/>
      </Tabs>
    </Paper>
  )
}
