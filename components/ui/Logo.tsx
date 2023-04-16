import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src="/logo.webp" width={50} height={50} alt="logo" />
      {/* <h1 className="ml-2 font-sans  font-black text-transparent text-xl bg-clip-text bg-gradient-to-r from-red-500 to-red-600 uppercase">
        AVscannernews
      </h1> */}
    </div>
  );
};
export default Logo;
