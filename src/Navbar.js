import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = ({projects}) => {
    return (  
        <div class="w3-top">
            <div class="w3-bar dark-grey w3-card">
                <HashLink  class="w3-bar-item w3-button w3-padding-large w3-hide-small" smooth to="/#home">HOME</HashLink>
                <Link className="w3-bar-item w3-button w3-padding-large w3-hide-small" to="/curriculo">CURRÍCULO</Link>
                <HashLink  class="w3-bar-item w3-button w3-padding-large w3-hide-small" smooth to="/#contatos">CONTATOS</HashLink>
                <div class="w3-dropdown-hover w3-hide-small">
                <button class="w3-padding-large w3-button" title="More">PROJETOS <i class="fa fa-caret-down"></i></button>     
                <div class="w3-dropdown-content w3-bar-block w3-card-4">
                    {projects && projects.map((project, index)=> (
                    <a href={project.link} className="w3-bar-item w3-button" key={index} target="_blank" rel="noopener noreferrer">{project.name}</a>
                    ))}
                </div>
                </div>
            </div>
            </div>
    );
}
 
export default Navbar;