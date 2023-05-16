import { FbPost } from "@/types/FbPost";
import { format } from "date-fns";

const FBPost = ({
  post: { created_time, message, full_picture, permalink_url },
}: FbPost) => {
  return (
    <div className="w-full max-w-lg bg-base-100 shadow-xl mb-8 border rounded-md">
      <div className="space-y-2 p-4">
        <h1 className="text-2xl font-bold capitalize">
          {format(new Date(created_time), "eeee MMMM do h:mm a")}{" "}
        </h1>
        <hr />
        <p>{message}</p>
      </div>
      <figure>
        {full_picture && <img src={full_picture} alt={permalink_url} />}
      </figure>
    </div>
  );
};

export default FBPost;
