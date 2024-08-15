import React, { useState } from "react";

function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Alice",
      content: "Just achieved my goal of running 5km!",
    },
    {
      id: 2,
      author: "Bob",
      content: "Looking for accountability partners for a 30-day challenge.",
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([
        ...posts,
        { id: posts.length + 1, author: "You", content: newPost },
      ]);
      setNewPost("");
    }
  };

  return (
    <div className="community">
      <h1>Community Board</h1>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <strong>{post.author}:</strong> {post.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts or progress..."
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default Community;
