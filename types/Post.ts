export type Post {
    _id: string;
    title: string;
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
    mainImage: {
        _type: string;
        asset: {
            _type: string;
            _ref: string;
        };
        hotspot: {
            _type: string;
            x: number;
            y: number;
            height: number;
            width: number;
        };
        crop: {
            _type: string;
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
    };
    categories: {
        _type: string;
        _ref: string;
        _key: string;
    }[];
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
    
    
}