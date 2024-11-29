'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projects = [
  {
    id: '01',
    category: 'web',
    image: '/images/yyshiftdb.png',
    title: 'YY-Shifts - Server',
    description:
      'This app is a shift scheduling system designed to automate and optimize the process of assigning shifts to employees. It aims to improve efficiency and employee satisfaction.',
    stack: ['Typescript', 'NodeJS', 'ExpressJS', 'PostgreSQL'],
    github: 'https://github.com/yarinTag/YY-shifts',
  },
  {
    id: '02',
    category: 'web',
    image: '/images/CoopShot_Client.png',
    title: 'CoopShot - Client',
    description:
      'CoopShoot is a universal, cloud-based app that lets friends, family, and groups easily share photos from trips or events. Snap photos directly in the app to save instantly, with details like photographer, date, and location included. Albums sort smartly, with face recognition suggesting share options, interactive maps showing photo locations, and easy transfer to other cloud services.',
    stack: ['React-Native', 'Android'],
    github: 'https://bitbucket.org/Y_Tag/coopshot-client/src/master/',
  },
  {
    id: '03',
    category: 'web',
    image: '/images/CoopShot_Server.png',
    title: 'CoopShot - Server',
    description:
      'CoopShoot is a cloud-based app for effortlessly sharing event photos with family and friends across all devices and platforms. Leveraging a machine learning algorithm, CoopShoot identifies faces in uploaded photos based on past images, offering sharing suggestions for each participant in the picture.',
    stack: ['NodeJS', 'express', 'MongoDB', 'Cloudinary', 'MySql', 'Oracle'],
    github: 'https://bitbucket.org/Y_Tag/coopshot-server/src/master/',
  },
  {
    id: '04',
    category: 'mobile',
    image: '/images/GetEvent.png',
    title: 'GetEventProject - Android App',
    description:
      'GetEventProject is an Android app designed for seamless event planning and management. Create events, add friends, track live status updates, and keep everyone connected in real-time. Perfect for organizing gatherings, coordinating plans, and staying informed with friends and family.',
    stack: ['Android - JAVA', 'SQLite', 'FireBase'],
    github: 'https://github.com/yarinTag/GetEventProject',
  },
];

const Project = () => {
  const [project, setProject] = React.useState(projects[0]);
  const [projectIndex, setProjectIndex] = React.useState(0);

  const handleSlider = (index: number) => {
    setProjectIndex(index);
    setProject(projects[index]);
  };

  return (
    <div className='container my-18 mx-auto px-12 py-4' id='projects'>
      <div className='flex flex-col xl:flex-row xl:gap-[32px]'>
        <div className='w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none'>
          <div className='flex flex-col gap-2'>
            <div>
              <div className='text-8xl font-bold'>{project.id}</div>
            </div>
            <h2 className='text-2xl font-bold transition-all duration-500 capitalize'>
              {project.title}
            </h2>
            <p className='text-gray-400 dark:text-gray-500'>
              {project.description}
            </p>
            <ul className='flex gap-2 flex-wrap'>
              {project.stack.map((stack, index) => (
                <li key={stack}>
                  {stack} {index !== project.stack.length - 1 && ','}
                </li>
              ))}
            </ul>
            <div className='border-y'></div>
            <div className='flex gap-4'>
              <Link href={project.github}>Github</Link>
              <Link href={project.github}>Live</Link>
            </div>
          </div>
        </div>
        <div className='w-full xl:w-[50%]'>
          <div
            id='default-carousel'
            className='relative w-full'
            data-carousel='static'
          >
            <div className='relative h-56 overflow-hidden rounded-lg md:h-96 aspect-h-9'>
              <div className='duration-700 ease-in-out' data-carousel-item>
                <Image
                  src={project.image}
                  layout='fill'
                  objectFit='contain'
                  className='absolute'
                  alt={project.title}
                />
              </div>
            </div>
            <button
              type='button'
              className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
              data-carousel-prev
              disabled={projectIndex === 0}
              onClick={() => handleSlider(projectIndex - 1)}
            >
              <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                <svg
                  className='w-4 h-4 dark:text-gray-800 rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 6 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 1 1 5l4 4'
                  />
                </svg>
                <span className='sr-only'>Previous</span>
              </span>
            </button>
            <button
              type='button'
              className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
              data-carousel-next
              disabled={projectIndex === projects.length - 1}
              onClick={() => handleSlider(projectIndex + 1)}
            >
              <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                <svg
                  className='w-4 h-4 dark:text-gray-800 rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 6 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 9 4-4-4-4'
                  />
                </svg>
                <span className='sr-only'>Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
