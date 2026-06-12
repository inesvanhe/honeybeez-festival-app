import NavItem from "../molecules/NavItem";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-[#0D0A06] border-b border-[#C9A84C]/20">
      <p className="text-[#C9A84C] tracking-[0.4em] text-sm">
        H O N E Y | B E E Z
      </p>
      <div className="flex gap-8">
        <NavItem label="Home" to="/" />
        <NavItem label="Lineup" to="/lineup" />
        <NavItem label="Schedule" to="/schedule" />
      </div>
    </nav>
  );
}

export default Navbar;
