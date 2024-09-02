import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      getPosts();
    }, []);

    const getPosts = () => {
        axios.get("http://localhost:5000/posts")
         .then(response => {
            setPosts(response.data);
          })
          .catch(error => {
            console.error("Error fetching posts:", error);
          });
      };

    const deletePost = async(id) => {
        await axios.delete(`http://localhost:5000/posts/${id}`)
        .then(() => {
          getPosts();
        })
        .catch(error => {
          console.error("Error deleting post:", error);
        });
        
    }
    
  return (
    <div>
        <h1>Posts</h1>
        <hr />
        <button onClick={getPosts}>Refresh</button>
        <Link to={`/add`}>Add Post</Link>
        {posts.map(post => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default PostList