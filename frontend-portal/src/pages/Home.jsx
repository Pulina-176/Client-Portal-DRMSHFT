import React from 'react'
import PortalHeader from '../components/PortalHeader'
import Ongoing from '../components/Ongoing'
import Process from '../components/Process'
import PortalFooter from '../components/PortalFooter'

const taskLIST = [
  {
  name: "CV edit",
  status: "in progress",
  dueDate: "08-08-2024"
  },
  {
    name: "ATS Research",
    status: "in progress",
    dueDate: "08-08-2024"
  },
  {
    name: "CV Edit 2",
    status: "in progress",
    dueDate: "08-08-2024"
  },
  {
    name: "CV edit 2",
    status: "in progress",
    dueDate: "08-08-2024"
  },
  {
    name: "CV edit 2",
    status: "in progress",
    dueDate: "08-08-2024"
  },
  {
    name: "CV edit 2",
    status: "in progress",
    dueDate: "08-08-2024"
  },

  //status: To Do, In Progress, Done

]

const Home = () => {
  return (
   <>
    <PortalHeader/>
    <Ongoing />
    <Process taskLIST={taskLIST}/>
    <PortalFooter />
 
   </>
  )
}

export default Home