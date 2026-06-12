import MainLayout from "../components/templates/MainLayout";
import ArtistCard from "../components/molecules/ArtistCard";
import { artists } from "../data/artists";

function Lineup() {
  return (
    <MainLayout>
      <div className="bg-[#0D0A06] min-h-screen px-8 py-16">
        <p className="text-[#C9A84C] tracking-[0.5em] text-sm text-center mb-4">
          H O N E Y | B E E Z
        </p>
        <h1 className="text-[#F5F0E8] text-6xl font-bold text-center mb-16">
          LINEUP 2026
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              id={artist.id}
              name={artist.name}
              genre={artist.genre}
              image={artist.image}
              day={artist.day}
              time={artist.time}
              stage={artist.stage}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Lineup;
