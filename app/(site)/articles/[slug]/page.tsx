import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const ArticlePage = async ({ params }: any) => {
  const post = await getPost(params.slug);
  return (
    <>
      <div className="">
        <Image
          src={post.mainImage}
          width={0}
          height={0}
          sizes="100vw"
          alt={post.title}
          className="h-auto w-full"
        />
      </div>
      <article className="container">
        <PortableText value={post.body} />
      </article>
    </>
  );
};
export default ArticlePage;
