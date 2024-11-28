import React, { useEffect , useContext, useState } from 'react'
import Navbar from '../components/Navbar'; 
import Content from '../components/Content';
import Footer from '../components/Footer';
import Search from '../components/Search';
import { ProjectData_Context } from '../../contexts/projectdata-context';

const Home = () => {
  const projData = useContext(ProjectData_Context)
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
      <Navbar />
      <div className="h-[80px]"></div>
      <Search setSearchQuery={setSearchQuery}/>
      <Content allProjects={projData} searchQuery={searchQuery}/>
    </div>
  );
};

export default Home;