import React, { useState } from 'react';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'prosto ohuet blyat' },
    { id: 2, title: 'Javascript 2', body: 'prosto ohuet blyat' },
    { id: 3, title: 'Javascript 3', body: 'prosto ohuet blyat' },
  ])


  return (
    <div className="App">
      <form>
        <input type='text' placeholder='Post name' />
        <input type='text' placeholder='Post description' />
        <MyButton disabled>Create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts list 3" />
    </div>
  );
}

export default App;
