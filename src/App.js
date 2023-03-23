import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import { projectList } from './components/Data';

function App() {
  const [projects, setProjects] = useState(projectList);
  
  useEffect(() => {
    setProjects(projectList);
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
      <Projects projects={projects} />
    </div>
    
  );
}

export default App;
