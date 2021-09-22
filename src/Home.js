import React from 'react';
import SideBar from './SideBar';
import ProjectList from './ProjectList';
import data from './db.json';

const Home = () => {

    return ( 
        <div className="w3-row home">
            <h1><b className="w3-text-pink" style={{fontFamily: "Abril Text"}}>Projetos</b></h1>
            {data &&  <ProjectList projects={data.projects}/>}
            <SideBar />
        </div>
     );
}
 
export default Home;