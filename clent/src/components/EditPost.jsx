import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      const getPostById = () => {
        axios.get(`http://localhost:5000/posts/${id}`)
         .then(response => {
            setTitle(response.data.title);
            setDescription(response.data.description);
          })
          .catch(error => {
            console.error(error);
          });
      };
      getPostById();
    }, [id]);

    const updatePost = async(e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/posts/${id}`, { title, description })
         .then(() => {
            navigate("/");
          })
         .catch(error => {
            console.error(error);
          });
      };
    
    
  return (
    <div>
        <h2>Edit Post</h2>
        <form onSubmit={updatePost}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <button type="submit">Update Post</button>
        </form>
  
    </div>
  )
}

export default EditPost