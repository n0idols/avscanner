import PostItem from "@/components/ui/PostItem";
import { getPosts } from "@/sanity/sanity-utils";

const ArticlesPage = async () => {
  const posts = await getPosts();

  return (
    <section className="container">
      <div className="">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};
export default ArticlesPage;
