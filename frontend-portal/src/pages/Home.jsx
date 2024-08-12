import React, { useEffect , useContext } from 'react'
import PortalHeader from '../components/PortalHeader'
import Ongoing from '../components/Ongoing'
import Process from '../components/Process'
import PortalFooter from '../components/PortalFooter'
import { ClientData_Context } from '../contexts/clientdata-context'

// const taskLIST = [
//   {
//   name: "CV edit",
//   status: "in progress",
//   dueDate: "08-08-2024"
//   },
//   {
//     name: "ATS Research",
//     status: "in progress",
//     dueDate: "08-08-2024"
//   },
//   {
//     name: "CV Edit 2",
//     status: "in progress",
//     dueDate: "08-08-2024"
//   },
//   {
//     name: "CV edit 2",
//     status: "in progress",
//     dueDate: "08-08-2024"
//   },
//   {
//     name: "CV edit 2",
//     status: "to do",
//     dueDate: "08-08-2024"
//   },
//   {
//     name: "CV edit 2",
//     status: "to do",
//     dueDate: "08-08-2024"
//   },

//   //status: To Do, In Progress, Done

// ]

const Home = () => {

  const import_data = useContext(ClientData_Context)
  const clientName = import_data.clientName
  const taskList = import_data.Tasks

  return (
   <>
    <PortalHeader/>
    <Ongoing name={clientName}/>
    <Process taskLIST={taskList}/>
    <PortalFooter />
 
   </>
  )
}

export default Home