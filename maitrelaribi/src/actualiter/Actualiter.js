import React, { useEffect, useState } from 'react';
import './PostComponent.css'; // Import your CSS file for styling (create this file)
import PostModal from './PostModal';
import { useDispatch, useSelector } from 'react-redux';
import { delete_product, get_user } from '../redux/action/actionPost';
import PostModalUpdate from './PostModalUpdate'
const PostComponent = ({ data,selectedLanguage }) => {
  const user=useSelector((state)=>state.user)
  const [isModalUpdateOpen, setModalUpdateOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
const [token,setToken]=useState('')
  const dispatch = useDispatch();
useEffect(()=>{
  const token1=localStorage.getItem('token')
  dispatch(get_user())
  setToken(token1)
},[dispatch])
  const handleDelete = (id) => {
    dispatch(delete_product(id));
  };
  return (
    <div>
    {console.log(user)}
      {data.map((post, index) => (
        <div key={index} className="post-container">
          <div className="post-header">
            <div className="user-info">
            <h2>{post.title}</h2>
              <p>Postuler Le: {post.created_at.slice(0,10)}</p>
            </div>
          </div>
          <div className="post-content">
            {post.imageUrl && <img className="post-image" src={post.imageUrl} alt="Post" />}
            
            <p>{post.text}</p>
          </div>
          {user.role === "admin" && token? <button onClick={() => handleDelete(post.id)}>Delete</button>:null}
          {user.role === "admin" && token?<button onClick={() => setModalUpdateOpen(true)}>Modifer Une Post</button>:null}
          <PostModalUpdate post={post} isOpen={isModalUpdateOpen} onClose={() => setModalUpdateOpen(false)} />
        </div>
      ))}

      {user.role === "admin" && token?<button onClick={() => setModalOpen(true)}>Ajouter Une Post</button>:null}
      <PostModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default PostComponent;
