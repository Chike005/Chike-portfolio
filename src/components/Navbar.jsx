import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
        <li><Link to="/skills" className="hover:text-blue-400">Skills</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;
