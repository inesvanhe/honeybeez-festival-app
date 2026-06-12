import { Link } from "@tanstack/react-router";

interface NavItemProps {
  label: string;
  to: string;
}

function NavItem({ label, to }: NavItemProps) {
  return <Link to={to}>{label}</Link>;
}

export default NavItem;
