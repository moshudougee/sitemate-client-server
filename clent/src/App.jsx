import { BrowserRouter, Route, Routes } from "react-router-dom"
import NoPage from "./components/NoPage"
import EditPost from "./components/EditPost"
import AddPost from "./components/AddPost"
import PostList from "./components/PostList"


function App() {
  

  return (
    <div>
      <BrowserRouter>
       <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
         <h2 className="flex font-semibold ps-10">Sitemate Client Server Challenge</h2>
         <div className="flex space-x-4">
           <a href="/" className="text-sm px-4 hover:text-gray-400">Posts</a>
         </div>
       </nav>
       
       <div className="flex my-4 mx-20">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
