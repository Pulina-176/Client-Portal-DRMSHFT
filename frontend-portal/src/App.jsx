import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';

import Loading from './components/Loading';
import PortalBegin from './components/PortalBegin';
import { ClientData_Context } from './contexts/clientdata-context';

import Home from './pages/Home';

function ClientPortal() { // First Child Component

  const { taskId } = useParams();  // Get the task ID from the URL parameter

  const [Tasks, setTasks] = useState([]);  // Array to store subtasks / tasks
  const [clientName, setClientName] = useState('Buddy'); // Client Name
  const [showLoading, setShowLoading] = useState(true); // Show loading screen
  const formatDate = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  useEffect(() => {   // Fetch task data including subtasks from ClickUp Workspace
    const fetchClientProjectInfo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/client/gettask/${taskId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log(data);

        let fetchedTasks = [];

        if (data.subtasks !== undefined) {
          fetchedTasks = data.subtasks.map((task) => ({
            name: task.name,
            status: task.status.status,
            dueDate: formatDate(task.due_date)
          }));
        } else if (data.subtasks === undefined) {
          fetchedTasks = [{
            name: data.taskData.name,
            status: data.taskData.status.status,
            dueDate: formatDate(data.taskData.due_date)
          }];
        } else {
          fetchedTasks = data.taskData.subtasks.map((task) => ({
            name: task.name,
            status: task.status.status,
            dueDate: formatDate(task.due_date)
          }));
        }

        setTasks(fetchedTasks); // Update state with fetched tasks
        if (data.clientName != undefined){
          setClientName(data.clientName); // Update state with client name
        }
        setShowLoading(false); // Hide loading screen after data is fetched

        console.log(fetchedTasks);
      } catch (error) {
        console.error(error);
        setShowLoading(false); // In case of error, hide loading screen
      }
    };

    fetchClientProjectInfo();
  }, [taskId]);

  if (showLoading) {
    return <Loading />;
  }

  return (
    <ClientData_Context.Provider value={{ Tasks, clientName }}>   {/*  Provide Tasks and clientName to all components  */}
      <Routes>
        <Route path="/" element={<PortalBegin userName={clientName} />} />
        <Route path="/c" element={<Home />} />
      </Routes>
    </ClientData_Context.Provider>
  );
}

function App() {  // Parent Component with all routes
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/loading" />} />
        <Route path="/loading" element={<Loading />} />
        {/* Route with task ID parameter */}
        <Route path="/portal/:taskId/*" element={<ClientPortal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
