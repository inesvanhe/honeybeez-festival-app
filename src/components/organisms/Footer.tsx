import NavItem from "../molecules/NavItem";

function Footer() {
  return (
    <footer>
      <NavItem label="About" to="/about" />
      <NavItem label="Impressum" to="/impressum" />
    </footer>
  );
}

export default Footer;
