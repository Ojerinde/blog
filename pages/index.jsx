import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";

export const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting-Started-With-Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a React framework for production - it makes  building fullstack react apps and sites a breeze and ships  with server-side rendering",
    date: "2022-02-19",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting-Started-With-Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a React framework for production - it makes  building fullstack react apps and sites a breeze and ships  with server-side rendering",
    date: "2022-02-19",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting-Started-With-Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a React framework for production - it makes  building fullstack react apps and sites a breeze and ships  with server-side rendering",
    date: "2022-02-19",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting-Started-With-Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a React framework for production - it makes  building fullstack react apps and sites a breeze and ships  with server-side rendering",
    date: "2022-02-19",
  },
];
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
