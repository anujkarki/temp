// components/ResumeSite.js

import React from 'react';

const ResumeSite = () => {
  const phoneNumber = '123-456-7890';
  const emailAddress = 'example@example.com';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Name</h1>
        <p className="text-gray-600">Your Position</p>
        <div className="flex items-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-gray-500 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={handleCall}
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM0 10a10 10 0 012-6.33V4a1 1 0 011-1h2.67a1 1 0 01.7.29l8.77 8.78a1 1 0 01.23.33l1.72 5.16a1 1 0 01-.33 1.1A10 10 0 010 10zm4.72-4.72a8 8 0 0111.56 11.56l-1.75-5.25a1 1 0 01.16-.78l5.29-5.3a8 8 0 01-11.56 11.56l-4.24-4.24a8 8 0 010-11.32zm9.9 9.9l-3.25-3.25a1 1 0 00-1.41 1.41l3.25 3.25a1 1 0 001.41-1.41z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mr-2" onClick={handleCall}>{phoneNumber}</span>
        </div>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-gray-500 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={handleEmail}
          >
            <path
              fillRule="evenodd"
              d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zM3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
              clipRule="evenodd"
            />
            <path d="M8 11a1 1 0 100-2 1 1 0 000 2zM8 13a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
          <span className="mr-2" onClick={handleEmail}>{emailAddress}</span>
        </div>
      </header>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2 border-b-2 pb-2">About Me</h2>
        <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius libero eu odio facilisis, sit amet blandit odio interdum.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2 border-b-2 pb-2">Experience</h2>
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Company A</h3>
            <p><em>Address A</em></p>
            <p><em>Position A | Duration A</em></p>
            <ul className="list-disc list-inside">
              <li>Responsibility A1</li>
              <li>Responsibility A2</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Company B</h3>
            <p><em>Address B</em></p>
            <p><em>Position B | Duration B</em></p>
            <ul className="list-disc list-inside">
              <li>Responsibility B1</li>
              <li>Responsibility B2</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2 border-b-2 pb-2">Education</h2>
        <ul className="list-disc list-inside">
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Company A</h3>
            <p><em>Address A</em></p>
            <p><em>Position A | Duration A</em></p>
            <ul className="list-disc list-inside">
              <li>Responsibility A1</li>
              <li>Responsibility A2</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Company B</h3>
            <p><em>Address B</em></p>
            <p><em>Position B | Duration B</em></p>
            <ul className="list-disc list-inside">
              <li>Responsibility B1</li>
              <li>Responsibility B2</li>
            </ul>
          </div>
        </div>
          <li>University B - Degree B</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2 border-b-2 pb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Skill A</li>
          <li>Skill B</li>
        </ul>
      </section>
      <footer>
        <a href="#" className="text-blue-500 hover:underline mr-4">LinkedIn</a>
        <a href="#" className="text-blue-500 hover:underline mr-4">GitHub</a>
        <a href="#" className="text-blue-500 hover:underline">Twitter</a>
      </footer>
    </div>
  );
};

export default ResumeSite;
