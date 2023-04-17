import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { format } from "date-fns";
import PageWrapper from "@/components/ui/PageWrapper";

const ArticlePage = async ({ params }: any) => {
  const post = await getPost(params.slug);

  return (
    <PageWrapper>
      <div className="bg-gray-100 h-32 flex justify-center items-center">
        <h2>featured business/advertisement here</h2>
      </div>
      <div className="container">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="col-span-2">
            <div className="space-y-4 my-4">
              <h1 className="article-title">{post.title}</h1>
              <p className="article-subtitle">{post.subtitle}</p>
            </div>

            <div className="my-4">
              <Image
                src={post.mainImage || "/images/placeholder.png"}
                width={0}
                height={0}
                sizes="100vw"
                alt={post.title}
                className="h-auto w-full"
              />
            </div>

            <div className="flex items-center space-x-2 my-8">
              <div>
                <Image
                  src={post.author.image}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt={post.author.name}
                />
              </div>
              <p>|</p>
              <div>
                <p className="article-subtitle">{post.author.name}</p>
              </div>
              <p>|</p>
              <div>
                <p className="article-subtitle"></p>
                {format(new Date(), "do MMMM Y")}
              </div>
            </div>

            <article className="prose max-w-none">
              <PortableText value={post.body} />
            </article>
          </div>
          <div className="col-span-1">
            <h2 className="text-3xl font-black">Related Articles</h2>
            <h4>Advertisements</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              rerum quis! Ducimus tenetur perspiciatis non.
            </p>
            <h4>Advertisements</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              rerum quis! Ducimus tenetur perspiciatis non.
            </p>
            <h4>Advertisements</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              rerum quis! Ducimus tenetur perspiciatis non.
            </p>
            <h4>Advertisements</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              rerum quis! Ducimus tenetur perspiciatis non.
            </p>
            <h4>Advertisements</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              rerum quis! Ducimus tenetur perspiciatis non.
            </p>
            <h4>Advertisements</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              rerum quis! Ducimus tenetur perspiciatis non.
            </p>
            <h4>Advertisements</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              rerum quis! Ducimus tenetur perspiciatis non.
            </p>
            <h4>Advertisements</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              rerum quis! Ducimus tenetur perspiciatis non.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default ArticlePage;
