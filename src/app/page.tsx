'use client';
import React from 'react';

import { ThemeProvider } from './context';
import AboutSection from '@/components/about/About';
import Navbar from '@/components/navbar/Navbar';
import Section from '@/components/Section';
import Project from '@/components/Project';

export default function Home() {
  return (
    <ThemeProvider>
      <main className={`flex min-h-screen flex-col`}>
        <Navbar />
        <div className='container my-24 mx-auto px-12 py-4 mb-0'>
          <Section />
        </div>
        <AboutSection />
        <Project />
      </main>
    </ThemeProvider>
  );
}
