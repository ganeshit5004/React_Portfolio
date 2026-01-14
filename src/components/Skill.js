import python from "../assets/python.png";
import fastapi from "../assets/fastapi.svg";
import sqlserver from "../assets/microsoftsqlserver-plain.svg";
import pandas from "../assets/pandas.png";
import numpy from "../assets/numpy.svg";
import sklearn from "../assets/sklearn.svg";
import xgboost from "../assets/xgboost.png";
import git from "../assets/github.svg";
import docker from "../assets/docker.svg";
import postman from "../assets/postman.svg";
import azure from "../assets/azure.svg";

const Skill = () => {
  const skills = [
    { id: 1, name: python, skill: "Python", style: "shadow-yellow-500" },
    { id: 2, name: fastapi, skill: "FastAPI", style: "shadow-green-500" },
    { id: 3, name: sqlserver, skill: "SQL Server", style: "shadow-blue-500" },
    { id: 4, name: pandas, skill: "Pandas", style: "shadow-blue-400" },
    { id: 5, name: numpy, skill: "NumPy", style: "shadow-cyan-400" },
    { id: 6, name: sklearn, skill: "Scikit-Learn", style: "shadow-orange-400" },
    { id: 7, name: xgboost, skill: "XGBoost", style: "shadow-red-500" },
    { id: 9, name: git, skill: "Git / GitHub", style: "shadow-gray-500" },
    { id: 10, name: docker, skill: "Docker", style: "shadow-blue-600" },
    { id: 11, name: postman, skill: "Postman", style: "shadow-orange-500" },
    { id: 12, name: azure, skill: "Azure / Deployment", style: "shadow-indigo-500" }
  ];

  return (
    <div name="Skills" className="bg-gradient-to-b from-gray-900 to-black w-full text-white py-16">
      <div className="max-w-screen-xl  mx-auto px-4">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Professional Skills
          </p>
          <p className="py-6 text-gray-400">
            Backend • Data Engineering • Machine Learning • Deployment
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8">
          {skills.map(({ id, name, skill, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-300 py-6 rounded-xl ${style}`}
            >
              <img src={name} alt={skill} className="w-20 mx-auto" />
              <p className="mt-4">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
