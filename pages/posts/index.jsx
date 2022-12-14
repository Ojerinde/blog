import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: { posts: allPosts },
  };
}
