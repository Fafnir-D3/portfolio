import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Image, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom';

const Home = ({projects}) => {

    const styles = StyleSheet.create({
        icon: {
            height: 24,
            width: 24, 
            float:"left",
            marginRight:16
        },
    });

    return (
        <div className="w3-row home">
            <Slide easing="ease">
                {projects.map((project, index)=> (
                    <div className="each-slide w3-display-container w3-center w3-black" id="home" key={index}>
                        <div className="w3-opacity " style={{width: "100%",backgroundImage: `url(${project.img})`}}>
                        </div>
                    </div>
                ))} 
                </Slide>
            
            <div class="w3-container w3-content w3-padding-64" style={{maxWidth:800}}>
                <h2 class="w3-wide w3-center w3-text-white">PROJETOS</h2>

                <div className="w3-row-padding w3-padding-32" style={{margin:-16}}>
                    {projects.map((project, index)=> (
                        <div class="w3-third w3-margin-bottom" key={index} >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                            <div className="dark-grey w3-hover-opacity">
                                <Image source={project.img} style={{opacity:0.7,height:200}} />
                                <div class="w3-container">
                                    <p><b>{project.name}</b></p>
                                    <p class="w3-opacity">{project.date}</p>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                            </a>
                        </div>
                    ))} 
                </div>
            </div>
            

            <div className="dark-grey" id="contatos">
                <div class="w3-container w3-content w3-text-white w3-padding-64" style={{maxWidth:800}}>
                <h2 class="w3-wide w3-center">CONTATOS</h2>

                <ul class="w3-ul light-grey w3-text-white w3-card-4 link">
                    <li class="w3-padding"><Image source="/img/icon1.png" style={styles.icon}/><Link to="/curriculo">Currículo</Link></li>
                    <li class="w3-padding"><Image source="/img/icon2.png" style={styles.icon}/>(21) 99595-4142 </li>
                    <li class="w3-padding"><Image source="/img/icon3.png" style={styles.icon}/>brbuckley@id.uff.br </li>
                    <li class="w3-padding"><Image source="/img/icon4.png" style={styles.icon}/><a href="https://github.com/Fafnir-D3" target="_blank" rel="noopener noreferrer">github.com/Fafnir-D3 </a></li>
                    <li class="w3-padding"><Image source="/img/icon5.png" style={styles.icon}/><a href="https://www.linkedin.com/in/brendan-buckley-702214220/" target="_blank" rel="noopener noreferrer">/brendan-buckley-702214220 </a></li>
                </ul>
                </div>
            </div>

        </div>
     );
}
 
export default Home;