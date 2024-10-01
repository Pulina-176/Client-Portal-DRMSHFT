import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import { useEffect, useState} from 'react';
import { ProjectData_Context } from '../contexts/projectdata-context';
import Loading from './components/Loading';


const App = () => {
  const [projects, setprojects] = useState([]);
  const [showLoading, setShowLoading] = useState(true);


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/admin/allprojects`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setprojects(data);
        setShowLoading(false);
    }
    
    catch (error) {
      console.error(error);
    }};

    fetchProjects();
  }, []);

  if (showLoading) {
    return <div> <Loading /></div>;
  }

  return (
    <Router>
      <ProjectData_Context.Provider value={{projects}}>
      <Routes>
        <Route path="/" element={<div> <Home /> </div>}/>
       
      </Routes>
      </ProjectData_Context.Provider>
    </Router>
  );
};

export default App;