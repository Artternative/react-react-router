import "./App.css";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import { BrowserRouter,Routes,Route,useParams } from "react-router-dom";

function App() {
  
  
  return (
     <BrowserRouter>
        < Routes >
             < Route path="/" element={<HomePage />} />
             < Route path="/view/:id" element={<ViewProductPage />} />
             < Route path="/create" element={<CreateProductPage />} />
             < Route path="/edit" element={<EditProductPage />} />    
        </Routes>
     </BrowserRouter>
  )
}

export default App;
