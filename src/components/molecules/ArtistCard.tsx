interface ArtistCardProps {
  name: string;
  genre: string;
  image: string;
}

function ArtistCard({ name, genre, image }: ArtistCardProps) {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{genre}</p>
    </div>
  );
}

export default ArtistCard;
