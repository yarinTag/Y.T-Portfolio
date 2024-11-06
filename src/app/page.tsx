import AboutSection from '@/components/about/About';
import Navbar from '@/components/navbar/Navbar';
import Section from '@/components/Section';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[black]'>
      <Navbar />
      <div className='container my-24 mx-auto px-12 py-4 mb-0'>
        <Section />
      </div>
      <AboutSection />
    </main>
  );
}
