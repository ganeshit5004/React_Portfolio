import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import ganesh from "../assets/ganesh.jpeg";

const Home = () => {
  return (
    <div name="Home" className="h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Python Backend & AI Engineer
          </h2>
          <p className="text-gray-400 max-w-xl mt-4">
            Software Developer at Populus Empowerment Network specializing in FastAPI,
            SQL Server, Machine Learning pipelines and large-scale data engineering systems.
          </p>

          <Link to="Project" smooth duration={500}>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md flex items-center gap-2">
              View My Work <FaArrowRight/>
            </button>
          </Link>
        </div>

        <img src={ganesh} alt="Ganesh" className="w-64 md:w-80 rounded-full border-4 border-cyan-500"/>
      </div>
    </div>
  );
};

export default Home;
