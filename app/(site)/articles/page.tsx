import PageHero from "@/components/ui/PageHero";
import PostItem from "@/components/ui/PostItem";
import { getPosts } from "@/sanity/sanity-utils";

const ArticlesPage = async () => {
  const posts = await getPosts();

  return (
    <>
      <PageHero title="Articles" subtitle="Read our latest articles" />
      <section className="container">
        <div className="">
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};
export default ArticlesPage;
