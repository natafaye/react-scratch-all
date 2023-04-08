import { useState } from "react";

export default function ChannelForm({ addChannel }) {
  const [nameValue, setNameValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addChannel({ name: nameValue });
    setNameValue("");
  };

  return (
    <form>
      <label htmlFor="channel-name-input" className="form-label">
        Channel Name
      </label>
      <input
        type="text"
        id="channel-name-input"
        className="form-control"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
}
