import React, { useEffect } from 'react'
import PortalHeader from '../components/PortalHeader'
import Ongoing from '../components/Ongoing'
import Process from '../components/Process'
import PortalFooter from '../components/PortalFooter'
import { useParams } from'react-router-dom'

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
    status: "to do",
    dueDate: "08-08-2024"
  },
  {
    name: "CV edit 2",
    status: "to do",
    dueDate: "08-08-2024"
  },

  //status: To Do, In Progress, Done

]

const Home = () => {
  const task_id = '86eq1bd57'

  useEffect(() => {   // Fetch task data including subtasks from ClickUp Workspace
    const fetchClientProjectInfo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/client/gettask/${task_id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
        
      }
    };

    fetchClientProjectInfo();
  }, []);


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