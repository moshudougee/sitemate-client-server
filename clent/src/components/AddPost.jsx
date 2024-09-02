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
    <div className="flex flex-col gap-2 justify-start px-10 w-[600px] min-h-screen shadow-md rounded-md">
        <div className="flex w-full h-[60px]">
            <h1 className="text-slate-800 text-xl font-semibold">Add Post</h1>
        </div>
        <form onSubmit={savePost} className="flex flex-col gap-4 w-full px-5">
            <label className="flex gap-3 w-full">
                <span className="w-1/3">Title:</span>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Title"
                    className="w-2/3 h-[30px] border" 
                />
            </label>
            <hr/>
            <label className="flex gap-3 w-full">
                <span className="w-1/3">Description:</span>
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="w-2/3 h-[90px] border" 
                />
            </label>
            <hr/>
            <button type="submit" className="bg-green-500 w-1/2 rounded justify-center p-2">Add Post</button>
        </form>
    </div>
  )
}

export default AddPost