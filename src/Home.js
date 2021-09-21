import React, { useState } from 'react';
import SideBar from './SideBar';
import ProjectList from './ProjectList';
import useFetch from './useFetch';

const Home = () => {

    const{ data: projects, isPending, error } = useFetch('http://localhost:8000/projects');

    return ( 
        <div className="w3-row home">
            <h1><b className="w3-text-pink" style={{fontFamily: "Abril Text"}}>Projetos</b></h1>
            {projects && <ProjectList projects={projects}/>}
            <SideBar />
        </div>
     );
}
 
export default Home;