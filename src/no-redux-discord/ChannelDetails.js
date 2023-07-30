import PostForm from "./PostForm";
import PostList from "./PostList";

export default function ChannelDetails({ channel, postList, addPost }) {
  return (
    <div className="my-4">
      <h4>#{channel.name}</h4>
      <PostList postList={postList} channelId={channel.id} />
      <PostForm addPost={addPost} channelId={channel.id} />
    </div>
  );
}
