'use client';
import React from 'react';

interface TimelineItemProps {
  icon?: React.ReactNode;
  title: string;
  description?: string[];
  logo?: string;
  company?: string;
  position?: string;
  duration?: string;
  location?: string;
  skills?: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  description,
  company,
  position,
  duration,
  location,
}) => {
  return (
    <li className='mb-10 ms-4'>
      <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
      <time className='mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400'>
        {duration}
      </time>
      <h3 className='text-lg font-semibold text-blue-400'>{company}</h3>
      <p className='italic block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400'>
        {position}
      </p>
      <p className='block mb-2 text-xs font-normal  text-gray-600 dark:text-gray-400'>
        {location}
      </p>
      <div className='mb-4 text-base font-normal text-gray-600 dark:text-gray-400'>
        <ul>
          {description?.map((item, index) => (
            <li className='mb-10 ms-4' key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ol className='relative border-s border-gray-200 dark:border-gray-700'>
      {children}
    </ol>
  );
};

export { Timeline, TimelineItem };
