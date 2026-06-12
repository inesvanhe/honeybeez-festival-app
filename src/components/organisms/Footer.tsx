import NavItem from "../molecules/NavItem";

function Footer() {
  return (
    <footer className="bg-[#0D0A06] border-t border-[#C9A84C]/20 px-8 py-12 mt-auto">
      <div className="flex justify-between items-start mb-12">
        <div className="flex flex-col gap-4">
          <p className="text-[#C9A84C] tracking-[0.4em] text-xs mb-2">
            NAVIGATION
          </p>
          <NavItem label="About" to="/about" />
          <NavItem label="Impressum" to="/impressum" />
          <NavItem label="Anfahrt" to="/anfahrt" />
        </div>

        <p className="text-[#C9A84C] tracking-[0.4em] text-sm">
          H O N E Y | B E E Z
        </p>

        <div className="flex flex-col gap-4">
          <p className="text-[#C9A84C] tracking-[0.4em] text-xs mb-2">SOCIAL</p>
          <p className="text-[#F5F0E8] text-sm uppercase tracking-widest opacity-70">
            Instagram
          </p>
          <p className="text-[#F5F0E8] text-sm uppercase tracking-widest opacity-70">
            Facebook
          </p>
        </div>
      </div>

      <div className="border-t border-[#C9A84C]/20 pt-6 text-center">
        <p className="text-[#F5F0E8] opacity-30 text-xs tracking-widest">
          © 2026 HONEY|BEEZ FESTIVAL. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
