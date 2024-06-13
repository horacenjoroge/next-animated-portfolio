

import React from 'react';
import ResumeLink from '@/components/ResumeLink'; // Adjust the import path as per your project structure

const ResumePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>
      {/* Include any additional sections or information here */}
      <ResumeLink />
    </div>
  );
};

export default ResumePage;
