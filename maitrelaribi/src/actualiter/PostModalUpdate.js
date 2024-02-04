import React, { useState, useEffect } from 'react';
import './Modal.css'; // Import your CSS file for styling (create this file)
import { add_product, update_product } from '../redux/action/actionPost';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const PostModal = ({ isOpen, onClose, onPostuler, post }) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState([]);
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const [id, setId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
        setId(post.id)
      setTitle(post.title);
      setImage(post.imageUrl || '');
      setText(post.text || '');
    }
  }, [post]);
  const handlePostuler = async() => {
    // Perform any additional validation or checks if needed
    // Then, call the onPostuler function with the data
    const formData = new FormData();
    formData.append("file", imageUrl);
    formData.append("upload_preset", "maitrlaaribi");
   if(imageUrl.length>0){
    await axios.post("https://api.cloudinary.com/v1_1/dm1xlu8ce/upload", formData)
    .then((res)=>{
      dispatch(update_product(id,{
        title:title,
        text:text,
        imageUrl:res.data.secure_url,
       }))
    })
   }else{
    dispatch(update_product(id,{
        title:title,
        text:text,
        imageUrl:post.imageUrl,
       }))
   }
  
    // Reset input values
    setTitle('');
    setImageUrl('');
    setText('');

    // Close the modal
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Create a New Post</h2>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Image URL:</label>
        <input type="file" files={image} onChange={(e) => setImageUrl(e.target.files[0])} />
        <label>Text:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handlePostuler}>Modifer</button>
      </div>
    </div>
  );
};

export default PostModal;
