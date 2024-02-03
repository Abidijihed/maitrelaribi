import React, { useState } from 'react';
import './Modal.css'; // Import your CSS file for styling (create this file)
import {add_product} from '../redux/action/actionPost'
import { useDispatch } from 'react-redux';
import axios from 'axios';

const PostModal = ({ isOpen, onClose, onPostuler }) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState([]);
  const [text, setText] = useState('');
  const dispatch=useDispatch()

  const handlePostuler = async() => {
    // Perform any additional validation or checks if needed
    // Then, call the onPostuler function with the data
    const formData = new FormData();
    formData.append("file", imageUrl);
    formData.append("upload_preset", "maitrlaaribi");
   await axios.post("https://api.cloudinary.com/v1_1/dm1xlu8ce/upload", formData)
    .then((res)=>{
      dispatch(add_product({
        title:title,
        text:text,
        imageUrl:res.data.secure_url,
       }))
    })
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
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Create a New Post</h2>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Image URL:</label>
        <input type="file"  onChange={(e) => setImageUrl(e.target.files[0])} />
        <label>Text:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handlePostuler}>Postuler</button>
      </div>
    </div>
  );
};

export default PostModal;
