import MainLayout from "../components/templates/MainLayout";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { artists } from "../data/artists";

function TimeTable() {
  const { day } = useSearch({ strict: false });
  const navigate = useNavigate();

  const days = ["friday", "saturday", "sunday"];
  const filtered = artists
    .filter((a) => a.day === day)
    .sort((a, b) => a.time.localeCompare(b.time));

  return (
    <MainLayout>
      <div className="bg-[#0D0A06] min-h-screen px-8 py-16">
        <p className="text-[#C9A84C] tracking-[0.5em] text-sm text-center mb-4">
          H O N E Y | B E E Z
        </p>
        <h1 className="text-[#F5F0E8] uppercase text-6xl font-bold text-center mb-12">
          Timetable
        </h1>

        {/* Day Filter */}
        <div className="flex justify-center gap-4 mb-16">
          {days.map((d) => (
            <button
              key={d}
              onClick={() => navigate({ to: "/timetable", search: { day: d } })}
              className={`px-6 py-2 tracking-widest text-sm uppercase border transition-all ${
                day === d
                  ? "bg-[#C9A84C] text-[#0D0A06] border-[#C9A84C]"
                  : "border-[#C9A84C]/20 text-[#F5F0E8] hover:border-[#C9A84C]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Artists */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {filtered.map((artist) => (
            <div
              key={artist.id}
              className="border border-[#C9A84C]/20 px-6 py-4 flex justify-between items-center"
            >
              <div>
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">
                  {artist.genre}
                </p>
                <p className="text-[#F5F0E8] font-bold uppercase">
                  {artist.name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#F5F0E8] opacity-50 text-sm tracking-widest uppercase">
                  {artist.time}
                </p>
                <p className="text-[#F5F0E8] opacity-50 text-sm tracking-widest uppercase">
                  {artist.stage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default TimeTable;
