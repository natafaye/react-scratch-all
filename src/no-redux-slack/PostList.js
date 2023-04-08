export default function PostList({ channelId, postList }) {
  const channelPosts = postList.filter(
    (post) => post.channelId === channelId
  );

  if (channelPosts.length === 0) {
    return <p className="text-muted">No posts yet</p>;
  }
  return (
    <>
      {channelPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white border rounded shadow p-2 my-2 w-50"
        >
          {post.text}
        </div>
      ))}
    </>
  );
}
