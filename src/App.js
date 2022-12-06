import { Routes, Route } from "react-router-dom";

import NewArticle from "./components/NewArticle";
import ReadArticle from "./components/ReadArticle";
import UpdateArticle from "./components/UpdateArticle";
import DeleteArticle from "./components/DeleteArticle";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:read" element={<ReadArticle />} />
      <Route path="/new" element={<NewArticle />} />
      <Route path="/update" element={<UpdateArticle />} />
      <Route path="/delete" element={<DeleteArticle />} />
    </Routes>
  );
}

export default App;
