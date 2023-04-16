import { PortableTextBlock } from "sanity";
import { Author } from "./Author";

export type Post = {
  _id: string;
  title: string;
  subtitle: string;
  mainImage: string;
  slug: {
    _type: string;
    current: string;
  };
  excerpt: string;

  author: Author;
  publishedAt: string;
  body: PortableTextBlock[];
  content: PortableTextBlock[];
};
