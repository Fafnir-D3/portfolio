import { Image } from "react-native";

const Curriculo = ({curriculo}) => {

    const meuCurriculo=curriculo.at(0);

    return ( 
<div class="curriculo dark-grey w3-mobile">

  <div class="w3-row-padding">
  
    <div class="w3-third">
    
      <div class="light-grey w3-text-white w3-card-4">
        
        <div className="w3-black">
          <Image source="/img/fotoFundoPreto.png"  style={{backgroundColor: "#000",resizeMode: "cover",height: 350,"width": "100%"}}/>
        </div>
        <div class="w3-display-container">
            <div class="w3-display-bottomleft w3-container">
                <h2 className="w3-text-white" ><b>{meuCurriculo.nome}</b></h2>
            </div>
        </div>

        <div class="w3-container link">
          <p>Vaga: Estágio</p>
          <p>Niterói, RJ</p>
          <p>brbuckley@id.uff.br</p>
          <p><a href="https://github.com/Fafnir-D3"><b>github.com/Fafnir-D3</b></a></p>

            <p class="w3-large"><b><i class="w3-margin-right"></i>Principais linguagens e Tecnologias</b></p>
            {meuCurriculo.tecnologias.map((tecnologia, index) => (
              <div className="w3-quarter w3-auto w3-center w3-container w3-white w3-round-xlarge" style={{margin:10}}>
              <div className="w3-round-xlarge"><p className="w3-text-black">{tecnologia}</p></div>
            </div>
            ))}
        </div>

      </div>

    </div>

    <div class="w3-twothird">
    
      <div class="w3-container w3-card dark w3-text-white w3-margin-bottom" style={{paddingBottom:32}}>
        <h2 class="w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge "></i>Objetivo</h2>
        <div class="w3-container">
          <p class="w3-opacity-min">{meuCurriculo.objetivo}</p>
        </div>
        <div class="w3-container">
          <h2 class="w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge "></i>Resumo</h2>
          <p class="w3-opacity-min">{meuCurriculo.resumo}</p>
        </div>
      </div>

      <div class="w3-container w3-card dark w3-text-white" style={{paddingBottom:32}}>
        <h2 class="w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge "></i>Formação Acadêmica</h2>
        <div class="w3-container">
          <h5><b>UFF - Universidade Federal Fluminense</b></h5>
          <h6 className="w3-opacity"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan/2019 - Jan/2023 (cursando)</h6>
          <p>Sistemas de Informação (Bacharel)</p>
        </div>
        <div class="w3-container">
          <h5><b>MET - Michigan English Test</b></h5>
          <h6 className="w3-opacity" ><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jul/2015</h6>
          <p>English Proficiency (Listening, Reading and Grammar)</p>
        </div>
      </div>

    </div>

  </div>
  
</div>
     );
}
 
export default Curriculo;