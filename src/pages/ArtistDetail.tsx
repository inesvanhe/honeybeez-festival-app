import MainLayout from "../components/templates/MainLayout";
import { useParams } from "@tanstack/react-router";
import { artists } from "../data/artists";

function ArtistDetail() {
  const { artistId } = useParams({ strict: false });
  const artist = artists.find((a) => a.id === artistId);

  if (!artist) {
    return (
      <MainLayout>
        <div className="bg-[#0D0A06] min-h-screen flex items-center justify-center">
          <p className="text-[#C9A84C] tracking-widest">ARTIST NOT FOUND</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="bg-[#0D0A06] min-h-screen">
        <div className="max-w-3xl mx-auto px-8 py-16">
          <p className="text-[#C9A84C] tracking-widest text-sm uppercase mb-2">
            {artist.genre}
          </p>
          <h1 className="text-[#F5F0E8] text-6xl font-bold uppercase mb-4">
            {artist.name}
          </h1>
          <p className="text-[#F5F0E8] opacity-50 tracking-widest text-sm uppercase mb-8">
            {artist.day} · {artist.time} · {artist.stage}
          </p>

          <img
            src={artist.image}
            alt={artist.name}
            className="w-full object-contain"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default ArtistDetail;
