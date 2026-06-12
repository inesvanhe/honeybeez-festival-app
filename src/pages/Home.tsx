import MainLayout from "../components/templates/MainLayout";

function Home() {
  return (
    <MainLayout>
      <div className="bg-[#0D0A06] flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* Logo als PNG später hier rein */}
        <p className="text-[#C9A84C] tracking-[0.5em] text-sm mb-8">
          H O N E Y | B E E Z
        </p>

        <h1 className="text-[#F5F0E8] text-6xl font-bold mb-6">
          FESTIVAL 2026
        </h1>

        <p className="text-[#C9A84C] uppercase tracking-[0.8em] text-sm mb-12">
          Willkommen im Hive
        </p>

        <p className="text-[#F5F0E8] max-w-md mb-12 opacity-70">
          Drei Tage - Eine Bühne - Unzählige Künstler
        </p>

        <a
          href="/lineup"
          className="border border-[#C9A84C] text-[#C9A84C] px-8 py-3 tracking-widest text-sm hover:bg-[#C9A84C] hover:text-[#0D0A06] transition-all"
        >
          LINEUP ENTDECKEN
        </a>
      </div>
    </MainLayout>
  );
}

export default Home;
