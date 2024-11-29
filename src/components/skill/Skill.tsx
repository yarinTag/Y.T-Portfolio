'use client';
import React from 'react';

interface SkillProps {
  title: string;
  skills: string[];
}

const Skill: React.FC<SkillProps> = ({ title, skills }) => {
  return (
    <div>
      <h3 className='italic font-bold text-blue-400 text-xl underline decoration-sky-500  px-4 py-2 '>
        {title}
      </h3>
      <ul className='text-sm mb-2 flex flex-wrap px-4 gap-4'>
        {skills.map((skill) => (
          <li
            key={skill}
            className='border border-blue-400 rounded-md opacity-50 hover:opacity-100 px-4 py-1'
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
