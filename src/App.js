import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f7f7f1] text-[#18332e]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <footer className="border-t border-[#dfe6dd] bg-[#f1f3ec]">
          <div className="page-shell flex flex-col gap-3 py-6 text-xs text-[#66746e] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Chike Ifedi. Built with care.</p>
            <div className="flex gap-5 font-semibold">
              <Link className="hover:text-[#087f6e]" to="/projects">Projects</Link>
              <Link className="hover:text-[#087f6e]" to="/skills">Skills</Link>
              <a className="hover:text-[#087f6e]" href="mailto:emmanuelifedi0@gmail.com">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
