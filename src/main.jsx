import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HelmetProvider } from 'react-helmet-async';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

import { Home } from './pages/Home';
import { Post } from './pages/Post';
import { AllPosts } from './pages/AllPosts';

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="/todos-os-posts/page/:page" element={<AllPosts />} />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
