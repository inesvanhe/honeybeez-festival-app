import { Link } from "@tanstack/react-router";

interface ArtistCardProps {
  id: string;
  name: string;
  genre: string;
  image: string;
  day: string;
  time: string;
  stage: string;
}

function ArtistCard({
  id,
  name,
  genre,
  image,
  day,
  time,
  stage,
}: ArtistCardProps) {
  return (
    <Link to={`/lineup/$artistId`} params={{ artistId: id }}>
      <div className="bg-[#1a1508] border border-[#C9A84C]/20 hover:border-[#C9A84C] transition-all">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full aspect-square object-cover"
          />
        ) : (
          <div className="w-full aspect-square bg-[#0D0A06] flex items-center justify-center">
            <p className="text-[#C9A84C]">{name}</p>
          </div>
        )}

        <div className="p-4">
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">
            {genre}
          </p>
          <h2 className="text-[#F5F0E8] font-bold text-lg uppercase mb-3">
            {name}
          </h2>
          <p className="text-[#F5F0E8] opacity-50 text-xs tracking-widest uppercase">
            {day} · {time} · {stage}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ArtistCard;
