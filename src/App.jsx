import React from 'react';
import NavBar from './UI/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Post from './Post';
import Notice from './Notice';
import NoticeDetail from './NoticeDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path={'/'} element={<Login />}></Route>
          <Route path={'/post'} element={<Post />}></Route>
          <Route path={'/notice'} element={<Notice />}></Route>
          <Route path={'/notice/:no'} element={<NoticeDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
