import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import PageWrapper from "@/components/ui/PageWrapper";
import PostItem from "@/components/ui/PostItem";
import { getPosts } from "@/sanity/sanity-utils";

const ArticlesPage = async () => {
  const posts = await getPosts();

  return (
    <PageWrapper>
      <PageHero title="Articles" subtitle="Read our latest articles" />
      <PageContainer>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </PageContainer>
    </PageWrapper>
  );
};
export default ArticlesPage;
