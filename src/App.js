import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/Home'
import AllProjects from './pages/projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
