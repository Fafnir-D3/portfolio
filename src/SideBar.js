import React from 'react';
import { Image } from 'react-native';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return ( 
        <div className="w3-col l4 SideBar">

            <Link to="/curriculo">
            <div class="w3-card w3-margin w3-margin-top link">
                    
                <div class="w3-container w3-white">
                <Image source="/img/curriculoIcon.png" alt="Sem Imagem" style={{resizeMode: "cover",height: 300,"width": "100%"}}/>
                    <h4><b>Meu Currículo</b></h4>
                    <p><b>Resumo:</b> Tenho conhecimento em desenvolvimento web (front-end e back-end), banco de dados, e linguagens de programação.</p>
                </div>
            </div>
            </Link>
                
            <div class="w3-card w3-margin">
                
                <div class="w3-container w3-padding" style={{backgroundColor:'#383A59'}}>
                    <h4>Contatos</h4>
                </div>
                
                <ul class="w3-ul w3-hoverable w3-white">
                    <li class="w3-padding-16">
                        <span class="w3-large">e-mail</span>
                        <span style={{padding:10}}>brbuckley@id.uff.br</span>
                    </li>
                    <li class="w3-padding-16">
                        <span class="w3-large">LinkedIn</span>
                        <span style={{padding:10}}><a href="https://www.linkedin.com/in/brendan-buckley-702214220/">brendan-buckley-702214220</a></span>
                    </li> 
                    <li class="w3-padding-16">
                        <span class="w3-large">GitHub</span>
                        <span style={{padding:10}}><a href="https://github.com/Fafnir-D3">Fafnir-D3</a></span>
                    </li>
                </ul>
            </div>
                
        </div>
     );
}
 
export default SideBar;