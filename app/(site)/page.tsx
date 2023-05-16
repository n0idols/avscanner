import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import PageWrapper from "@/components/ui/PageWrapper";

interface FbData {
  id: string;
  created_time: string;
  updated_time: string;
  message: string;
  permalink_url: string;
  full_picture: string;
}

const HomePage = async () => {
  // const res = await fetch(`${process.env.FB_URL}`);
  // const posts = await res.json();

  return (
    <PageWrapper>
      <PageHero title="Latest News" subtitle="From our Facebook page" />
      <PageContainer className="flex flex-col items-center">
        <h1>Posts</h1>
        {/* {posts.data.map((post: FbData) => (
          <FBPost key={post.id} post={post} />
        ))} */}
      </PageContainer>
    </PageWrapper>
  );
};
export default HomePage;
