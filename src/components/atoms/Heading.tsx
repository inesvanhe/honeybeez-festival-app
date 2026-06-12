interface HeadingProps {
  text: string;
  level?: "h1" | "h2" | "h3";
}

function Heading({ text, level = "h1" }: HeadingProps) {
  const Tag = level;
  return <Tag>{text}</Tag>;
}

export default Heading;
