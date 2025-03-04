import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Fynbakes</Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
