import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div
        style={{
          backgroundColor: "PINK",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">Fynbakes</Link>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
