import FestivalLayout from "../components/templates/FestivalLayout";

function Festival() {
  return (
    <FestivalLayout>
      <div className="bg-[#0D0A06] min-h-screen flex flex-col items-center justify-center text-center px-8">
        <p className="text-[#C9A84C] tracking-[0.5em] text-sm mb-8">
          H O N E Y | B E E Z
        </p>

        <h1 className="text-[#F5F0E8] text-8xl font-bold uppercase mb-8">
          FESTIVAL 2026
        </h1>

        <p className="text-[#C9A84C] tracking-[0.8em] text-sm mb-16">
          E S T . 2 0 2 4
        </p>

        <a
          href="/"
          className="border border-[#C9A84C] text-[#C9A84C] px-8 py-3 tracking-widest text-sm uppercase hover:bg-[#C9A84C] hover:text-[#0D0A06] transition-all"
        >
          Enter The Hive
        </a>
      </div>
    </FestivalLayout>
  );
}

export default Festival;
