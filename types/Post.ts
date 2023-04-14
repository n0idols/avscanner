export type Post = {
  _id: string;
  title: string;
  mainImage: string;
  slug: {
    _type: string;
    current: string;
  };
  excerpt: string;

  author: {
    _type: string;
    _ref: string;
    _key: string;
  };
  publishedAt: string;
  body: {
    _type: string;
    _key: string;
    children: {
      _type: string;
      _key: string;
      marks: string[];
      text: string;
    }[];
    markDefs: {
      _type: string;
      _key: string;
      href: string;
    }[];
    style: string;
  }[];
};
