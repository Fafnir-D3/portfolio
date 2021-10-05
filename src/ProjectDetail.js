import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { Image } from "react-native";
import {useParams} from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';

const ProjectDetail = ({projects}) => {
    
    const {id}=useParams();

    const project=projects.at(id-1);

    const [ altura, setAltura ] = useState()

    useEffect(() => {
        setAltura( document.getElementById('descricao').clientHeight)
        console.log(altura);
    },[altura]);

    return ( 
<div className="project-detail dark-grey">
    
    <div className="meusSlides" id="slides">
    <Slide easing="ease">
        {project.slides.map((slideImage, index)=> (
        <div className="each-slide" key={index}>
            <div className="w3-opacity" style={{backgroundImage: `url(${slideImage})`}}></div>
        </div>
        ))} 
    </Slide>
    </div>

    <div className="light-grey">
        <div className="w3-container w3-content w3-padding-64" style={{maxWidth:1400}}>

            <div className="w3-row-padding w3-padding-32">

                <div className="w3-hide-small w3-col l6 w3-padding-large">
                    <Image className="w3-image w3-opacity-min" source={project.extras[0]} alt="Sem Imagem" style={{resizeMode: "cover",height: altura, "width": "100%"}}/>
                </div>
                
                <div className="w3-col w3-half w3-padding-64 link" id="descricao">

                    <div style={{paddingLeft:32, paddingRight:32}}>
                        <h1 className="w3-center">Sobre o Projeto</h1>
                        <h5 className="w3-center w3-opacity">feito em: {project.date}</h5>
                        <p className="w3-large">{project.description}</p>
                        <p className="w3-large w3-hide-medium">{project.maisInfo}</p>
                    </div>

                </div>

            </div>

        </div>
    </div>

    <div className="w3-container w3-content w3-padding-64" style={{maxWidth:1400}}>
        
        <div className="w3-col l6 w3-padding-large dark-grey">
            
            <h1 className="w3-center">Tecnologias</h1>
            {project.tecnologias.map((tecnologia, index)=> (
            <div className="w3-quarter w3-center w3-auto w3-container w3-white w3-round-xlarge" style={{margin:20}} key={index}>
                <div className="w3-center w3-round-xlarge"><h4 className="w3-text-black">{tecnologia}</h4></div>
            </div>
            ))}

        </div>
    
        <div className="w3-col l6 w3-padding-large">
            <Image className="w3-image w3-opacity-min" source={project.extras[1]} alt="Sem Imagem" style={{resizeMode: "cover",height: 580,"width": "100%"}}/>
        </div>
        
    </div>

</div>
     );
}
 
export default ProjectDetail;