import ChannelDetails from "./ChannelDetails";

export default function ChannelList({ channelList, postList, addPost }) {
  if (channelList.length === 0) {
    return <p className="text-muted">No channels yet</p>;
  }

  return (
    <>
      {channelList.map((channel) => (
        <ChannelDetails
          key={channel.id}
          channel={channel}
          postList={postList}
          addPost={addPost}
        />
      ))}
    </>
  );
}
