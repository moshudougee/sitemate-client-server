import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const savePost = async(e) => {
        e.preventDefault();
        try {
           await axios.post("http://localhost:5000/posts", {
             title,
             description
           });
           navigate("/"); 
        } catch (error) {
           console.log(error); 
        }
    }
    
  return (
    <div>
        <h2>Add Post</h2>
        <form onSubmit={savePost}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <br/>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br/>
            <button type="submit">Add Post</button>
        </form>
    </div>
  )
}

export default AddPost