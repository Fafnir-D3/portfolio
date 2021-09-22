import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1><b style={{fontFamily: "Abril Text"}}>Portifolio</b></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/curriculo">Curriculo</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;