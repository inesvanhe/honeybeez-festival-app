interface FestivalLayoutProps {
  children: React.ReactNode;
}

function FestivalLayout({ children }: FestivalLayoutProps) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}

export default FestivalLayout;
