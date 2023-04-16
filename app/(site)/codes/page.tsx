import PageHero from "@/components/ui/PageHero";
import { getCodes } from "@/sanity/sanity-utils";

const CodesPage = async () => {
  const codes = await getCodes();

  return (
    <>
      <PageHero title="Radio Codes" subtitle="LASD most used codes" />
      <section className="container">
        <div className="max-w-lg mx-auto">
          {codes.map((code) => (
            <div key={code._id} className="grid grid-cols-2 border-b my-2 px-2">
              <div>
                <p className="text-lg font-bold">{code.code}</p>
              </div>
              <div>
                <p className="text-lg">{code.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default CodesPage;
