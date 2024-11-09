import React, { useEffect , useContext } from 'react'
import Nav from '../components/Nav'
import Ongoing from '../components/Ongoing'
import Process from '../components/Process'
import PortalFooter from '../components/PortalFooter'
import { ClientData_Context } from '../contexts/clientdata-context'

const Home = () => {

  const import_data = useContext(ClientData_Context)
  //const clientName = import_data.clientName
  const projectName = import_data.taskData?.name || 'No Project Name';
  const taskList = import_data.Tasks


  //Need to display the task that is currently in progress which is also with the closest due date

  const inprogress_tasks = taskList.filter(task => task.status === "in progress") //getting the tasks that are currently in progress

  let inprogress_task

  //console.log("import data working", import_data)

  if (inprogress_tasks.length === 0) {  // getting the first task expected to be complete in the inprogress_tasks array
    inprogress_task = {
      name: "No tasks in progress"}  
  }
  else {
    inprogress_task = inprogress_tasks[0]  // bubble sort method to get the task with the earliest due date
    for (let i=1; i<inprogress_tasks.length; i++){
      if(inprogress_tasks[i].dueDate < inprogress_task.dueDate){
        inprogress_task = inprogress_tasks[i]
        console.log(inprogress_task)
    }
  } 
} 

  return (
   <>
    <Nav currentTask={inprogress_task} />
    <Ongoing name={projectName} currentTask={inprogress_task}/>
   
    <Process taskLIST={taskList}/>
   
    <PortalFooter />
 
   </>
  )


}

export default Home