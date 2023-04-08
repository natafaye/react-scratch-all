import { useState } from "react";

export default function PostForm({ channelId, addPost }) {
  const [textValue, setTextValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost({ text: textValue, channelId: channelId });
    setTextValue("");
  };

  return (
    <form className="d-flex w-50">
      <input
        type="text"
        className="form-control"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button className="btn btn-success ms-2" onClick={handleSubmit}>
        Post
      </button>
    </form>
  );
}
