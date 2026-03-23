import { client } from "./client";

// Blog post list
export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      "categories": categories[]->title,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
    }`
  );
}

// Single blog post by slug
export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      body,
      "categories": categories[]->title,
      "author": author-> { name, image, bio }
    }`,
    { slug }
  );
}

// All slugs for static generation
export async function getAllPostSlugs() {
  return client.fetch(
    `*[_type == "post" && defined(slug.current)] { "slug": slug.current }`
  );
}
