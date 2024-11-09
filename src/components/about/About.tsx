import Image from 'next/image';
import { Timeline, TimelineItem } from '../TimelineItem';
import Tab from '../tab/Tab';

const experienceData = [
  {
    company: 'ABRA WEB & MOBILE (Previously Herolo)',
    position: 'Front End Developer at AspenTech',
    duration: 'Jan 2022 - Oct 2023',
    location: 'Tel Aviv, Israel',
    description: [
      'Ongoing system maintenance and new features development based on demands from other teams for a sophisticated seismic processing system that generates 2D and 3D seismic images of the subsurface. The system integrates a wide range of geophysical applications and a versatile programming development kit for client customization.',
      'Refactored a legacy class components project into a new, highly efficient system using functional components and a robust Redux architecture for complex state management.',
      'Created a test workflow using Cypress and Jest to cover tests for individual components and fully complex flows. Successfully increased the systems test coverage from scratch and integrated it into the Azure pipeline, ensuring comprehensive versioning and backward compatibility.',
      'Collaborated with cross-functional teams to deliver projects on time, enhancing team cohesion and project efficiency. Coordinated with designers, product managers, and other developers to ensure smooth project execution and alignment with business goals and timelines.',
    ],
    skills: ['Material-UI', 'GitHub', '+8 skills'],
  },
  {
    company: 'Novello Financial Group',
    position: 'Full-stack Developer',
    duration: 'May 2021 - Jan 2022',
    location: 'Rehovot, Center District, Israel',
    description: [
      'Designed and implemented business logic for a fintech startup, ensuring smooth and secure financial transactions.',
      'Developed multiple APIs for both external customers and internal purposes, using NestJS framework.',
      'Designed an efficient database structure and generated complex reports with PostgreSQL and TypeORM, improving data accessibility and reporting accuracy.',
      'Integrated multiple external financial APIs, enabling seamless financial operations and enhancing service offerings.',
      'Developed and maintained complex UI components using React, TypeScript, Material UI, and CSS, enhancing user interaction and data management.',
    ],
    skills: ['Material-UI', 'NestJS', '+5 skills'],
  },
];

const tabs = [
  {
    label: 'Experience',
    content: (
      <div className='col-span-full mt-12'>
        {/* <h3 className='text-2xl font-bold text-white mb-4'>Experience</h3> */}
        <Timeline>
          {experienceData.map((experience) => (
            <TimelineItem
              key={experience.company}
              company={experience.company}
              position={experience.position}
              duration={experience.duration}
              location={experience.location}
              skills={experience.skills}
              description={experience.description}
              title={''}
            />
          ))}
        </Timeline>
      </div>
    ),
  },
  {
    label: 'Education',
    content: (
      <div className='col-span-full mt-12'>
        <Timeline>
          <TimelineItem
            key={'The College Of Management Academic Studies'}
            company={'The College Of Management Academic Studies'}
            position={'B.Sc. Computer Science'}
            duration={'2018-2021'}
            location={'Rishon lezion, Israel'}
            // skills={experience.skills}
            // description={experience.description}
            title={''}
          />
        </Timeline>
      </div>
    ),
  },
  {
    label: 'Skills',
    content: (
      <div className='skills-container'>
        <h2 className='text-2xl font-bold mb-4'>Skills</h2>
        <div className='skill-box'>
          <h3 className='text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-t-lg'>
            Languages
          </h3>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Java</li>
          </ul>
        </div>
        <div className='skill-box'>
          <h3 className='text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-t-lg'>
            Web Development
          </h3>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>NestJS</li>
            <li>Express.js</li>
            <li>HTML</li>
          </ul>
        </div>
        <div className='skill-box'>
          <h3 className='text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-t-lg'>
            Databases
          </h3>
          <ul>
            <li>MongoDB</li>
            <li>SQL (MSSQL)</li>
            <li>Redis</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className='skill-box'>
          <h3 className='text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-t-lg'>
            Testing & Development Tools
          </h3>
          <ul>
            <li>Storybook</li>
            <li>Cypress</li>
            <li>Azure</li>
            <li>Git & Bitbucket</li>
            <li>Jira</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const skillsData = [
    { title: 'Material-UI', icon: '//path/to/materialui-icon.svg' },
    { title: 'GitHub', icon: '//path/to/github-icon.svg' },
    // Add more skills objects here
  ];

  return (
    <section className='container my-24 mx-auto px-12 py-4' id='about'>
      <div className='md:order-2'></div>
      <div className='md:order-1 flex flex-col justify-center'>
        <h2 className='text-3xl font-bold text-white mb-4'>About Me</h2>
        <p className='text-lg text-gray-300 mb-6'>
          After completing around 9 months of reserve duty, I'm now seeking my
          next opportunity. With around 3 years of hands-on experience in React,
          Node.js, and cloud technologies, I’m eager to bring my technical
          expertise to a dynamic team and drive forward-thinking projects.
        </p>
      </div>
      <Tab tabs={tabs} />
    </section>
  );
};

export default AboutSection;
