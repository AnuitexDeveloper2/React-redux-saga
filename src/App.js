import React from 'react';
import PostForm from './comonents/PostForm';
import Posts from './comonents/Posts';
import FetchedPosts from './comonents/FetchedPosts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
            <PostForm/>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <h1>Posts</h1>
            <Posts/>
        </div>
      <div className="col">
       <h1>Fetched Posts</h1> 
            <FetchedPosts/>
        </div>
      </div>
    </div>
  );
}

export default App;
