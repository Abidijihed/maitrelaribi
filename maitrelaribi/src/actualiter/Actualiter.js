import React, { useState } from 'react';
import './PostComponent.css'; // Import your CSS file for styling (create this file)
import PostModal from './PostModal';

const PostComponent = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {data.map((post, index) => (
        <div key={index} className="post-container">
          <div className="post-header">
            {/* <img
              className="user-avatar"
              src="https://example.com/avatar.jpg" // Replace with the user's avatar URL
              alt="User Avatar"
            /> */}
            <div className="user-info">
            <h2>{post.title}</h2>
              {/* <h3>{post.author}</h3> Replace with the actual user's name */}
              <p>Postuler Le: {post.created_at.slice(0,10)}</p>
            </div>
          </div>
          <div className="post-content">
            {post.imageUrl && <img className="post-image" src={post.imageUrl} alt="Post" />}
            
            <p>{post.text}</p>
          </div>
        </div>
      ))}

      <button onClick={() => setModalOpen(true)}>Ajouter Une Post</button>
      <PostModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default PostComponent;
