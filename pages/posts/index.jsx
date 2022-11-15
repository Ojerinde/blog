import AllPosts from "../../components/posts/all-posts";
import { DUMMY_POSTS } from "../index";

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
