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
    <div className="flex flex-col gap-2 justify-start px-10 w-[600px] min-h-screen shadow-md rounded-md">
        <div className="flex w-full h-[60px]">
            <h1 className="text-slate-800 text-xl font-semibold">Posts</h1>
        </div>
        <hr />
        <div className="flex gap-4">
            <button onClick={getPosts} className="bg-cyan-600 rounded justify-center p-2">
                Refresh
            </button>
            <Link to={`/add`} className="bg-green-500 rounded justify-center p-2">Add Post</Link>
        </div>
        
        {posts.map(post => (
            <div key={post.id} className="flex flex-col gap-4 w-full">
                <h2 className="font-semibold">{post.title}</h2>
                <p className="text-slate-600">{post.description}</p>
                <div className="flex gap-3 w-1/2">
                    <Link to={`/edit/${post._id}`} className="bg-cyan-800 rounded justify-center p-2">Edit</Link>
                    <button onClick={() => deletePost(post._id)} className="bg-red-800 rounded justify-center p-2">Delete</button>
                </div>
                <hr />
            </div>
            
        ))}
    </div>
  )
}

export default PostList