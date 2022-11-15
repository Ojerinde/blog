import PostHeader from "./post-header";
import classes from "./post-content.module.css";
const DUMMY_POSTS = {
  slug: "getting-started-with-nextjs",
  title: "Getting-Started-With-Nextjs",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2022-02-19",
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      {DUMMY_POSTS.content}
    </article>
  );
}
