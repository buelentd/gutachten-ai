import { groq } from "next-sanity";
import { client } from "./client";

// Home Page
export async function getHomePage() {
  return client.fetch(groq`*[_type == "homePage"][0]`);
}

// Funktionen Page
export async function getFunktionenPage() {
  return client.fetch(groq`*[_type == "funktionenPage"][0]`);
}

// Ablauf Page
export async function getAblaufPage() {
  return client.fetch(groq`*[_type == "ablaufPage"][0]`);
}

// Kontakt Page
export async function getKontaktPage() {
  return client.fetch(groq`*[_type == "kontaktPage"][0]`);
}

// Navigation
export async function getNavigation() {
  return client.fetch(groq`*[_type == "navigation"][0]`);
}

// Blog
export async function getAllPosts() {
  return client.fetch(groq`*[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, publishedAt, excerpt, mainImage
  }`);
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );
}
