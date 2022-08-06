import React from 'react';
import './App.css';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import { useSelector } from 'react-redux';

function App() {
  // Get all the posts and give it to PostList - useSelector
  const posts = useSelector(state => state.posts.postArray)

  return (
    <div>
      <NewPostForm/>
      <PostList posts={ posts }/>
    </div>
  );
}

export default App;
