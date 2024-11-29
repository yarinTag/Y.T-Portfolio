import Image from 'next/image';
import AnimatedText from '../shared/AnimatedText';

const Section = () => {
  const CV = '/images/YT-Resume.pdf';

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            Hi 👋, I&apos;m Yarin
          </h1>
          <AnimatedText text='Software Developer.' delay={100} />
          <p className='text-base sm:text-xl mb-6 lg:text-xl'>
            I&apos;m a specializing in creating robust web & mobile platforms
            using JavaScript, React, TypeScript and Node.js.
          </p>
          <div className='flex flex-col sm:flex-row items-center sm:space-x-2 space-y-4 sm:space-y-0'>
            <button
              className='mr-2 w-full sm:w-fit  py-2 px-8 rounded-full border-y-2 font-bold hover:bg-gray-400'
              aria-label='Contact Me'
            >
              <a href='mailto:yarin.tagouri@gmail.com'>Contact Me</a>
            </button>
            <button
              className='mr-2 w-full sm:w-fit  rounded-full py-2 px-8 hover:bg-slate-400 border-y-4 shadow-lg shadow-blue-500/50'
              aria-label='Download CV'
            >
              <a download='Yarin_Tag_CV.pdf' href={CV}>
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='w-[250px] h-[250px] relative'>
            <Image
              src='/images/Aime.png'
              alt='Hero Image'
              className='animate-refine-slide skew-y-6 rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={250}
              height={250}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
