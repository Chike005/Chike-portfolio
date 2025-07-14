function Contact() {
  return (
    <div className="p-6 min-h-[70vh] bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h1>
      <p className="text-lg text-gray-600 mb-4">
        I’m always open to new opportunities, collaborations, or just a chat.
      </p>
      <div className="space-y-3 text-gray-700">
        <p>
          📧 Email: <a href="mailto:emmanuelifedi0@gmail.com" className="text-blue-600 underline">emmanuelifedi0@gmail.com</a>
        </p>
        <p>
          💼 LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/chike-ifedi-691a88265" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Chike Ifedi
          </a>
        </p>
        <p>
          🐙 GitHub:{" "}
          <a href="https://github.com/chike005" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            github.com/your-username
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
