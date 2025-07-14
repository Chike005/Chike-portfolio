import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-light min-h-[80vh] flex flex-col justify-center items-start px-6 md:px-16">
      <h1 className="text-5xl font-extrabold text-dark leading-tight mb-4">
        Hey, I’m Chike 👋<br />
        Software Engineer & Problem Solver.
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        I build clean, scalable apps using modern frameworks like React, Django, and TensorFlow.
        From front-end polish to back-end logic — I bring ideas to life.
      </p>
      <div className="flex gap-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border border-dark text-dark rounded-lg hover:bg-dark hover:text-white transition"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Home;
