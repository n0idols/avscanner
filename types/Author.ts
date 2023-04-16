import { PortableTextBlock } from "sanity";

export type Author = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  bio: PortableTextBlock[];
};
