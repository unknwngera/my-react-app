import { type } from '@testing-library/user-event/dist/type';
import React, { useRef, useState } from 'react';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'prosto ohuet blyat' },
    { id: 2, title: 'Javascript 2', body: 'prosto ohuet blyat' },
    { id: 3, title: 'Javascript 3', body: 'prosto ohuet blyat' },
  ])


  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <PostForm />
      <PostList posts={posts} title="Javascript posts" />
    </div >
  );
}

export default App;
