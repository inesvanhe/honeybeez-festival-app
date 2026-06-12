import MainLayout from "../components/templates/MainLayout";

function Impressum() {
  return (
    <MainLayout>
      <div className="bg-[#0D0A06] min-h-screen text-center">
        <div className="max-w-3xl mx-auto px-8 py-16">
          <p className="text-[#C9A84C] tracking-[0.5em] text-sm mb-16 mt-16">
            H O N E Y | B E E Z
          </p>
          <h1 className="text-[#F5F0E8] text-6xl font-bold uppercase mb-12">
            Impressum
          </h1>

          <div className="flex flex-col gap-8 text-[#F5F0E8] opacity-70">
            <div>
              <p className="text-[#C9A84C] tracking-widest text-xs uppercase mb-2">
                Verantwortlich
              </p>
              <p>HONEY|BEEZ Festival GmbH</p>
              <p>Bienenstraße 42</p>
              <p>10115 Wabenstadt</p>
            </div>

            <div>
              <p className="text-[#C9A84C] tracking-widest text-xs uppercase mb-2">
                Kontakt
              </p>
              <p>hello@honeybeez-festival.de</p>
            </div>

            <div>
              <p className="text-[#C9A84C] tracking-widest text-xs uppercase mb-2">
                Geschäftsführung
              </p>
              <p>The Queen Bee</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Impressum;
