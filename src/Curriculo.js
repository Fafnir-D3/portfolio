import { Image } from "react-native";

const Curriculo = () => {

    
    return ( 
        <div class="w3-content w3-margin-top" style={{maxWidth: 1400}}>

  <div class="w3-row-padding">
  
    <div class="w3-third">
    
      <div class="w3-white w3-text-grey w3-card-4">
        <Image source="/img/foto.png" style={{resizeMode: "cover",height: 350,"width": "100%"}}/>
        <div class="w3-display-container">
            <div class="w3-display-bottomleft w3-container w3-white w3-round-large">
                <h2 className="w3-text-red" ><b style={{fontFamily: "Abril Text"}}>Brendan Buckley</b></h2>
            </div>
        </div>
        <div class="w3-container">
          <p><i class="w3-margin-right w3-large w3-text-teal"></i>Vaga: Estágio</p>
          <p><i class="w3-margin-right w3-large w3-text-teal"></i>Niterói, RJ</p>
          <p><i class="w3-margin-right w3-large w3-text-teal"></i>brbuckley@id.uff.br</p>
          <p><i class="w3-margin-right w3-large w3-text-teal"></i><a href="https://github.com/Fafnir-D3">github.com/Fafnir-D3</a></p>

            <p class="w3-large"><b><i class="w3-margin-right w3-text-teal"></i>Principais linguagens e Tecnologias</b></p>
            <div className="w3-quarter w3-auto w3-center w3-container w3-green w3-round-xlarge" style={{margin:10}}>
              <div className="w3-tag w3-green w3-round-xlarge"><p className="w3-text-black">Java</p></div>
            </div>
            <div className="w3-quarter w3-auto w3-center w3-container w3-green w3-round-xlarge" style={{margin:10}}>
              <div className="w3-tag w3-green w3-round-xlarge"><p className="w3-text-black">Python</p></div>
            </div>
            <div className="w3-quarter w3-auto w3-center w3-container w3-green w3-round-xlarge" style={{margin:10}}>
              <div className="w3-tag w3-green w3-round-xlarge"><p className="w3-text-black">C</p></div>
            </div>
            <div className="w3-quarter w3-auto w3-center w3-container w3-green w3-round-xlarge" style={{margin:10}}>
              <div className="w3-tag w3-green w3-round-xlarge"><p className="w3-text-black">HTML</p></div>
            </div>
            <div className="w3-quarter w3-auto w3-center w3-container w3-green w3-round-xlarge" style={{margin:10}}>
              <div className="w3-tag w3-green w3-round-xlarge"><p className="w3-text-black">CSS</p></div>
            </div>
            <div className="w3-quarter w3-auto w3-center w3-container w3-green w3-round-xlarge" style={{margin:10}}>
              <div className="w3-tag w3-green w3-round-xlarge"><p className="w3-text-black">JavaScript</p></div>
            </div>
            <div className="w3-quarter w3-auto w3-center w3-container w3-green w3-round-xlarge" style={{margin:10}}>
              <div className="w3-tag w3-green w3-round-xlarge"><p className="w3-text-black">jQuery</p></div>
            </div>
            <div className="w3-quarter w3-auto w3-center w3-container w3-green w3-round-xlarge" style={{margin:10}}>
              <div className="w3-tag w3-green w3-round-xlarge"><p className="w3-text-black">Bootstrap</p></div>
            </div>
            <div className="w3-quarter w3-auto w3-center w3-container w3-green w3-round-xlarge" style={{margin:10}}>
              <div className="w3-tag w3-green"><p className="w3-text-black">MySQL</p></div>
            </div>
            <div className="w3-quarter w3-auto w3-center w3-container w3-green w3-round-xlarge" style={{margin:10}}>
              <div className="w3-tag w3-green"><p className="w3-text-black">Git</p></div>
            </div>
            <div className="w3-quarter w3-auto w3-center w3-container w3-green w3-round-xlarge" style={{margin:10}}>
              <div className="w3-tag w3-green"><p className="w3-text-black">PostgreSQL</p></div>
            </div>
        </div>
      </div>

    </div>

    <div class="w3-twothird">
    
      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Objetivo</h2>
        <div class="w3-container">
          <p>Vaga de estágio na área de informática, a fim de adquirir experiência no meio profissional das tecnologias que aprendi na faculdade e conhecer tecnologias novas.</p>
        </div>
        <div class="w3-container">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Resumo</h2>
          <p>Conhecimento em desenvolvimento web (front-end e back-end), banco de dados, e linguagens de programação.</p>
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