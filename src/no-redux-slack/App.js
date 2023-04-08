import { useState } from "react";
import ChannelForm from "./ChannelForm";
import ChannelList from "./ChannelList";

let nextPostId = 10;
let nextChannelId = 10;

export default function App() {
  const [channelList, setChannelList] = useState([]);
  const [postList, setPostList] = useState([]);

  const addPost = (newPostData) => {
    const newPost = {
      id: nextPostId++,
      ...newPostData
    };
    setPostList(postList.concat(newPost));
  };

  const addChannel = (newChannelData) => {
    const newChannel = {
      id: nextChannelId++,
      ...newChannelData
    };
    setChannelList(channelList.concat(newChannel));
  };

  return (
    <div className="m-3 w-50">
      <ChannelForm addChannel={addChannel} />
      <hr />
      <ChannelList
        channelList={channelList}
        postList={postList}
        addPost={addPost}
      />
    </div>
  );
}
