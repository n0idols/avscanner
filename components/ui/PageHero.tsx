const PageHero = ({ title, subtitle }) => {
  return (
    <header className="bg-gray-50 h-32 flex flex-col justify-center items-center mb-4">
      <h2 className="font-bold text-3xl">{title}</h2>
      <p>{subtitle}</p>
    </header>
  );
};
export default PageHero;
