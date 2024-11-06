import Image from 'next/image';
import AnimatedText from './AnimatedText';

const Section = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            Hi 👋, I'm Yarin
          </h1>
          <AnimatedText text='Software Developer.' delay={100} />
          <p className='text-white text-base sm:text-xl mb-6 lg:text-xl'>
            I’m a . specializing in creating robust web & mobile platforms using
            JavaScript, React, TypeScript and Node.js.
          </p>
          <div>
            <button className='mr-4 w-full sm:w-fit bg-[#0D0D0D] text-white py-3 px-6 rounded-full font-bold hover:bg-gray-700'>
              Contact Me
            </button>
            <button className='mr-4 w-full sm:w-fit rounded-full py-3 px-6 bg-transparent hover:bg-slate-400 text-white border border-white mt-3'>
              Download CV
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#0D0D0D] w-[300px] h-[300px] relative'>
            <Image
              src='/images/ai.png'
              alt='Hero Image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

<p className='text-white'></p>;
export default Section;
