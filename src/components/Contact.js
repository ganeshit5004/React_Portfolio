import React, { useState } from "react";
import { TiTickOutline } from "react-icons/ti";

const Contact = ({ sendEmail }) => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      name="Contact"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center"
    >
      <div className="max-w-screen-lg mx-auto px-6 w-full">
        <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline">
          Get In Touch
        </h2>
        <p className="text-gray-400 mt-4">
          Have a project or want to collaborate? Drop me a message.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Info Section */}
          <div className="text-gray-400 space-y-4">
            <p><span className="text-cyan-400">Email:</span> ganeshit5004@gmail.com</p>
            <p><span className="text-cyan-400">Location:</span> Chennai, India</p>
            <p><span className="text-cyan-400">Role:</span> Python Backend & AI Engineer</p>
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full mb-4 p-3 bg-black/30 border border-white/10 rounded-md focus:outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full mb-4 p-3 bg-black/30 border border-white/10 rounded-md focus:outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full mb-6 p-3 bg-black/30 border border-white/10 rounded-md focus:outline-none"
              required
            />

            {!sent ? (
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md hover:scale-105 duration-300">
                Send Message
              </button>
            ) : (
              <div className="flex justify-center">
                <TiTickOutline className="text-green-400 w-12 h-12" />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
