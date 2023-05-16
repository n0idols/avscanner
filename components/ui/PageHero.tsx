type PageHeroProps = {
  title: string;
  subtitle?: string;
};

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <header className="bg-gray-50 h-48 flex flex-col justify-center items-center mb-4 px-8 space-y-2">
      <h2 className="font-bold text-4xl">{title}</h2>
      <p className="text-lg">{subtitle}</p>
    </header>
  );
};
export default PageHero;
