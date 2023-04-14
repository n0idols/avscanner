import { getCodes } from "@/sanity/sanity-utils";

const CodesPage = async () => {
  const codes = await getCodes();

  return (
    <section className="container">
      <div className="">
        {codes.map((code) => (
          <div key={code._id} className="grid grid-cols-2 border my-2 px-2">
            <div>
              <h1 className="text-lg font-bold">{code.code}</h1>
            </div>
            <div>
              <h1 className="text-lg">{code.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CodesPage;
