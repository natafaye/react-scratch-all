import { useState } from "react";
import { addPost } from "./postSlice";
import { useDispatch } from 'react-redux';

export default function NewPostForm() {
    const [postValue, setPostValue] = useState("");
    const dispatch = useDispatch();

    const onPostButtonClick = () => {
        const newPost = {
            text: postValue
        }
        // actually save this post to redux - dispatch
        dispatch(addPost(newPost))
        setPostValue("")
    }

    return (
        <div>
            <textarea value={postValue} onChange={(event) => setPostValue(event.target.value)}/>
            <button className="btn btn-primary" onClick={onPostButtonClick}>Post</button>
        </div>
    )
}