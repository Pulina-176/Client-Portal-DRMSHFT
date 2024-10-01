import React, { useEffect , useContext } from 'react'
import Navbar from '../components/Navbar'; 
import Content from '../components/Content';
import Footer from '../components/Footer';
import { ProjectData_Context } from '../../contexts/projectdata-context';

const Home = () => {
  const projData = useContext(ProjectData_Context)
  return (
    <div>
      <Navbar />
      <Content allProjects={projData}/>
      <Footer />
    </div>
  );
};

export default Home;