import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  title: string;
  mainImage: string;
  slug: {
    _type: string;
    current: string;
  };
  publishedAt: string;
  body: PortableTextBlock[];
};
