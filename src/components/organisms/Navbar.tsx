import NavItem from "../molecules/NavItem";

function Navbar() {
  return (
    <nav>
      <NavItem label="Home" to="/" />
      <NavItem label="Lineup" to="/lineup" />
      <NavItem label="Schedule" to="/schedule" />
    </nav>
  );
}

export default Navbar;
