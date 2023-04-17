import { Post } from "@/types/Post";
import Image from "next/image";
import Link from "next/link";

const PostItem = ({ post }: { post: Post }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 border mb-4 rounded">
      <div>
        <Image
          src={post.mainImage}
          width={0}
          height={0}
          className="h-auto w-full rounded-l"
          sizes="100vw"
          alt={post.title}
        />
      </div>
      <div className="col-span-2 flex flex-col justify-center space-y-4 p-4">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p>{post.subtitle}</p>
        <div className="flex md:justify-end justify-center ">
          <Link className="btn" href={`/articles/${post.slug}`}>
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PostItem;
