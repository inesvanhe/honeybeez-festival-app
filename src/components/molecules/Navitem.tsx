import { Link } from "@tanstack/react-router";

interface NavItemProps {
  label: string;
  to: string;
}

function NavItem({ label, to }: NavItemProps) {
  return (
    <Link
      to={to}
      className="text-[#F5F0E8] uppercase tracking-widest text-sm hover:text-[#C9A84C] transition-all"
    >
      {label}
    </Link>
  );
}

export default NavItem;
