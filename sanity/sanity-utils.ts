import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Code } from "@/types/Code";
import { Contact } from "@/types/Contact";
import { Post } from "@/types/Post";

export async function getCodes(): Promise<Code[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "code"] | order(_createdAt asc){
        _id,
        title,
        code
    }`
  );
}
export async function getContacts(): Promise<Contact[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "contact"]{
        _id,
        title,
        phone
    }`
  );
}
export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
        _id,
        title,
        subtitle,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        
    }`
  );
}
export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        subtitle,
        publishedAt,
        "author": author->{
          name,
          "image": image.asset->url
        },
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        body,
        content
    }`,
    { slug }
  );
}

// export async function getProduct(slug: string): Promise<Product> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "product" && slug.current == $slug][0]{
//         _id,
//         title,
//         shortname,
//         "slug": slug.current,
//         desc,
//         feat,
//         price,
//         "gallery": gallery[].asset->url,
//         includes,
//         "relatedProducts": relatedProducts[]->{
//                 _id,
//                 title,
//                 shortname,
//                 "slug": slug.current,
//                 "mobileImage": mobileImage.asset->url,

//               },
//         "mainImage": mainImage.asset->url,
//         "mobileImage": mobileImage.asset->url,
//         "category": category->title,
//         "categorySlug": category->slug
//       }`,
//     { slug }
//   );
// }

// export async function getCategories(): Promise<Category[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "category"]{
//             _id,
//             title,
//             "slug": slug.current,
//             "products": *[_type == "product" && references(^._id)]{
//               _id,
//               title,
//               shortname,
//               "slug": slug.current,
//               desc,
//               feat,
//               price,
//               "gallery": gallery[].asset->url,
//               includes,
//               "mainImage": mainImage.asset->url,
//               "mobileImage": mobileImage.asset->url,
//               "category": category->title,
//               "categorySlug": category->slug
//             }
//         }`
//   );
// }

// export async function getCategory(slug: string): Promise<Category> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "category" && slug.current == $slug][0]{
//                 _id,
//                 title,
//                 "slug": slug.current,
//                 "products": *[_type == "product" && references(^._id)]{
//                     _id,
//                     title,
//                     "slug": slug.current,
//                     "mainImage": mainImage.asset->url,
//                     "price": price
//                 }
//             }`,
//     { slug }
//   );
// }
