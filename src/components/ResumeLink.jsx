import React from 'react';

const ResumeLink = () => {
  return (
    <div>
      <h2>Download My Resume</h2>
      <a 
        href="https://drive.google.com/file/d/1SJuOEU7nkgGeXKk29P4aUZmS7kNglwHL" // replace with your PDF link
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black"
      >
        Click here to download my resume
      </a>
    </div>
  );
};

export default ResumeLink;
