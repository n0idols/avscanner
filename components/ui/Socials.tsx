import Image from "next/image";

const Socials = () => {
  return (
    <div className="grid place-items-center grid-cols-3 gap-4">
      <Image
        src="/icons8-facebook-48.png"
        width={32}
        height={32}
        alt="facebook"
      />
      <Image
        src="/icons8-instagram-48.png"
        width={32}
        height={32}
        alt="instagram"
      />
      <Image
        src="/icons8-twitter-48.png"
        width={32}
        height={32}
        alt="twitter"
      />
    </div>
  );
};
export default Socials;
