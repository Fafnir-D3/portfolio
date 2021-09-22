import { Image } from "react-native";
import data from './db.json';

const Curriculo = () => {

  const curriculo = data.curriculo.at(0);

    return ( 
        <div class="w3-content w3-margin-top" style={{maxWidth: 1400}}>

  <div class="w3-row-padding">
  
    <div class="w3-third">
    
      <div class="w3-white w3-text-grey w3-card-4">
        <Image source="/img/foto.png" style={{resizeMode: "cover",height: 350,"width": "100%"}}/>
        <div class="w3-display-container">
            <div class="w3-display-bottomleft w3-container w3-white w3-round-large">
                <h2 className="w3-text-red" ><b style={{fontFamily: "Abril Text"}}>{curriculo.nome}</b></h2>
            </div>
        </div>
        <div class="w3-container link">
          <p>Vaga: Estágio</p>
          <p>Niterói, RJ</p>
          <p>brbuckley@id.uff.br</p>
          <p><a href="https://github.com/Fafnir-D3"><b>github.com/Fafnir-D3</b></a></p>

            <p class="w3-large"><b><i class="w3-margin-right w3-text-teal"></i>Principais linguagens e Tecnologias</b></p>
            {curriculo.tecnologias.map((tecnologia, index) => (
              <div className="w3-quarter w3-auto w3-center w3-container w3-green w3-round-xlarge" style={{margin:10}}>
              <div className="w3-tag w3-green w3-round-xlarge"><p className="w3-text-black">{tecnologia}</p></div>
            </div>
            ))}
        </div>
      </div>

    </div>

    <div class="w3-twothird">
    
      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Objetivo</h2>
        <div class="w3-container">
          <p>{curriculo.objetivo}</p>
        </div>
        <div class="w3-container">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Resumo</h2>
          <p>{curriculo.resumo}</p>
        </div>
      </div>

      <div class="w3-container w3-card w3-white">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Formação Acadêmica</h2>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>UFF - Universidade Federal Fluminense</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan/2019 - Jan/2023 (cursando)</h6>
          <p>Sistemas de Informação (Bacharel)</p>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>MET - Michigan English Test</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jul/2015</h6>
          <p>English Proficiency (Listening, Reading and Grammar)</p>
        </div>
      </div>
      
    </div>
    
  </div>
  
</div>
     );
}
 
export default Curriculo;