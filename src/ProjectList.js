import React from 'react';
import { Image } from 'react-native';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    return (
            
            <div class="w3-col l8 s12 project-list">
            
                {projects.map(project => (
                <div class="w3-card-4 w3-margin w3-white" style={{}} key={project.id}>
                    <Image source={project.img} alt="Sem Imagem" style={{resizeMode: "cover",height: 500,"width": "100%"}}/>
                    <div class="w3-container">
                        <h3><b>{project.name}</b></h3>
                        <h5>Feito em: <span class="w3-opacity">{project.date}</span></h5>
                    </div>
                    
                    <div class="w3-container">
                        <p>{project.description}</p>
                        <div class="w3-row">
                            <div class="w3-col m8 s12">
                                <p><Link to={"/ProjectDetail/"+project.id}>
                                    <button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button>
                                    </Link>
                                    </p>
                            </div>
                            <div class="w3-col m4 w3-hide-small">
                                <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-tag">0</span></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
     );
}

export default ProjectList;