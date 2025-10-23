
import React from "react";
import blogData from "../data/blog";
import Header from "./Header";         // 1. Import Header
import About from "./About";           // 2. Import About
import ArticleList from "./ArticleList"; // 3. Import ArticleList

function App() {
  return (
    <div className="App">
      {/* 4. Render Header and pass the blog's name */}
      <Header name={blogData.name} /> 
      
      {/* 5. Render About and pass the image and about text */}
      {/* Note: blogData.image is 'logo' which must be the correct path/module import */}
      <About 
        image={blogData.image} 
        about={blogData.about} 
      />
      
      {/* 6. Render ArticleList and pass the array of posts */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;