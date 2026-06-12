import MainLayout from "../components/templates/MainLayout";

function About() {
  return (
    <MainLayout>
      <div className="bg-[#0D0A06] min-h-screen text-center">
        <div className="px-8 py-16 max-w-3xl mx-auto">
          <p className="text-[#C9A84C] tracking-[0.5em] text-sm mb-16 mt-16">
            H O N E Y | B E E Z
          </p>
          <h1 className="text-[#F5F0E8] text-6xl font-bold uppercase mb-12">
            About
          </h1>

          <p className="text-[#F5F0E8] text-lg opacity-70 mb-6 px-20">
            HONEY|BEEZ ist ein dreitägiges Musikfestival das elektronische
            Musik, Kunst und Community vereint. Gegründet 2024 mit einer Vision:
            einen Ort zu schaffen, an dem Musik und Gemeinschaft zusammenkommen.
          </p>

          <p className="text-[#C9A84C] tracking-[0.3em] uppercase opacity-70 mt-24">
            Drei Bühnen. Unzählige Künstler. Ein Hive.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
