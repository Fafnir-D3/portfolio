import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Image } from "react-native";
import {Link, useParams} from "react-router-dom";
import useFetch from './useFetch';
import 'react-slideshow-image/dist/styles.css'

const ProjectDetail = () => {

    const {id}=useParams();
    const{ data: project, isPending, error } = useFetch('http://localhost:8000/projects/' + id);

    return ( 
        <div className="project-detail">
            {isPending && <div>Loading...</div> }
            {error && <div>Error</div> }
            {project && (
            
            <div className="project">
                <div>
                <Slide easing="ease">
                    {project.slides.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                        <div style={{backgroundImage: `url(${slideImage})`}}>
                        </div>
                    </div>
                    ))} 
                </Slide>
                </div>
                <div className="w3-center w3-margin">
                    <h1><b className="w3-text-pink" style={{fontFamily: "Abril Text"}}>{project.name}</b></h1>
                </div>

                <div class="w3-content" style={{maxWidth:1400}}>

                    <div class="w3-row w3-padding-64" id="about">
                        
                        <div class="w3-col w3-half w3-padding-large w3-hide-small">
                            <Image className="w3-round w3-image w3-opacity-min" source={project.extras[0]} alt="Sem Imagem" style={{resizeMode: "cover",height: 750,"width": "100%"}}/>
                        </div>

                        <div class="w3-col w3-half w3-padding-large w3-purple">
                            <h1 class="w3-center">Sobre o Projeto</h1>
                            <h5 class="w3-center w3-opacity">feito em: {project.date}</h5>
                            <a className="w3-text-pink w3-hover-text-yellow" href={project.link}><b>link do projeto</b></a>
                            <p class="w3-large">{project.description}</p>
                            <p class="w3-large w3-hide-medium">{project.maisInfo}</p>
                        </div>
                    </div>
                </div>

                <div class="w3-row w3-padding-64" id="menu" >
                    <div class="w3-col l6 w3-padding-large w3-purple">
                        <h1 class="w3-center">Tecnologias</h1>
                        
                        {project.tecnologias.map((tecnologia, index)=> (
                            <div className="w3-quarter w3-center w3-auto w3-container w3-green w3-round-xlarge" style={{margin:20}} key={index}>
                                <div className="w3-center w3-tag w3-green w3-round-xlarge"><h4 className="w3-text-black">{tecnologia}</h4></div>
                            </div>

                        ))}
                    </div>
                
                    <div class="w3-col l6 w3-padding-large">
                        <Image className="w3-round w3-image w3-opacity-min" source={project.extras[1]} alt="Sem Imagem" style={{resizeMode: "cover",height: 750,"width": "100%"}}/>
                    </div>
                </div>
            </div>
            )}
        </div>
     );
}
 
export default ProjectDetail;