import React from 'react';
import { EmailIcon, GithubIcon, LocationIcon, PhoneIcon } from './svg';
import Image from "next/image";

const skills = [
  "JavaScript (ES6+)",
  "React.js",
  "Node.js",
  ".NET Framework (C#)",
  "HTML5",
  "CSS3",
  "SQL",
  "MS SQL Server",
  "Git",
];

const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow overflow-hidden sm:rounded-lg">
        {/* Header */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-3xl leading-8 font-bold text-gray-900">Anuj Karki</h3>
          <p className="mt-1 max-w-2xl text-lg text-gray-500">Software Developer</p>
          {/* Contact Details */}
          <div className="flex mt-2">
            <div className="mr-4">
              <span className="text-lg text-gray-500">
                <EmailIcon />
                </span>
              <a href="mailto:anujkarki553@gmail.com" className="ml-2 text-lg text-gray-900">anujkarki553@gmail.com</a>
            </div>
            <div className="mr-4">
              <span className="text-lg text-gray-500"><PhoneIcon/>
              </span>
              
              <a href="tel:+9779806030587" className="ml-2 text-lg text-gray-900">+977 9806030587</a>
            </div>
            <div className="mr-4">
              <span className="text-lg text-gray-500"><LocationIcon/></span>
              
              <a href="#" className="ml-2 text-lg text-gray-900">Gatthaghar, Bhaktapur</a>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="flex mt-2 hidden">
            <a href="https://linkedin.com/johndoe" className="mr-4 text-blue-500 hover:underline">LinkedIn</a>
            <a href="https://twitter.com/johndoe" className="mr-4 text-blue-500 hover:underline">Twitter</a>
            <a href="https://github.com/johndoe" className="text-blue-500 hover:underline">GitHub</a>
          </div>
        </div>
        {/* About Me */}
        <div className="border-t border-gray-200">
          <div className="bg-white px-4 py-5 sm:px-6">
            <dt className="text-lg font-medium text-gray-500 mb-2">About Me</dt>
            <div className="flex flex-wrap">
              Adaptable Management and software development major aiming to leverage proven communication, creative thinking and management skills to successfully fill the software developer at your xompany. 
              I can be relied upon to help your company achieve its goal.
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="border-t border-gray-200">
          <div className="bg-white px-4 py-5 sm:px-6">
            <dt className="text-lg font-medium text-gray-500 mb-2">Skills</dt>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="border-t border-gray-200">
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-gray-500">Experience</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">
              <div>
                <div className="text-xl font-bold">Synergy Info Systems</div>
                <div className="text-sm italic text-gray-600">Baluwatar, Kathmandu</div>
              </div>
              <div className="mt-2">
                <span className="font-bold italic">Software Developer</span>, <span className="text-sm italic">Apr 2022 - Present</span>
              </div>
              <ul className="list-disc list-inside text-sm">
              <li>Maintain and update existing application</li>
              <li>Implementation of new logics</li>
              <li>Lead and train interns and new joinee</li>
              <li>Debug and remove existing bugs and issues</li>
              <li>Modify the application as per request</li>
              <li>Quickly adapt with new technologies</li>
                <li>Implementing agile development priciples</li>
              </ul>
            </dd>
            <dt className="text-lg font-medium text-gray-500"></dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">
              <div>
                <div className="text-xl font-bold">Synergy Info Systems</div>
                <div className="text-sm italic text-gray-600">Baluwatar, Kathmandu</div>
              </div>
              <div className="mt-2">
                <span className="font-bold italic">Software Developer Intern</span>, <span className="text-sm italic">March 2022 - Apr 2022</span>
              </div>
              <ul className="list-disc list-inside text-sm ">
                <li>Understanding of programming basics</li>
                <li>Understanding of professional work environment</li>
                <li>Knowledge of different tools</li>
                <li>Develop readable code</li>
              </ul>
            </dd>
          </div>
        </div>
        {/* Education */}
        <div className="border-t border-gray-200">
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-gray-500">Education</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">
              <div>
                <div className="font-bold">Masters of Information Technology</div>
                <span>Amrit Science Campus</span>, <span className="text-sm italic">Lainchaur, Kathmandu</span>
                <div className="text-sm italic text-gray-600">04/2023 - Present</div>
              </div>
            </dd>
            <dt className="text-lg font-medium text-gray-500"></dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">
            <div>
                <div className="font-bold">Bachelor of Information Management</div>
                <span>Nepal Commerce Campus</span>, <span className="text-sm italic">Minbhawan, Kathmandu</span>
                <div className="text-sm italic text-gray-600">10/2017 - 07/2022</div>
              </div>
            </dd>
            <dt className="text-lg font-medium text-gray-500"></dt>
            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">
            <div>
                <div className="font-bold">Higher Secondary School</div>
                <span>GoldenGate Int'l School</span>, <span className="text-sm italic">Old Baneshwor, Kathmandu</span>
                <div className="text-sm italic text-gray-600">08/2015 - 08/2017</div>
              </div>
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
