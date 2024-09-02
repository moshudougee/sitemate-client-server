import { BrowserRouter, Route, Routes } from "react-router-dom"
import NoPage from "./components/NoPage"
import EditPost from "./components/EditPost"
import AddPost from "./components/AddPost"
import PostList from "./components/PostList"


function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
