'use client';
import React from 'react';

import { ThemeProvider } from './context';
import AboutSection from '@/components/section/AboutSection';
import Navbar from '@/components/navbar/Navbar';
import Project from '@/components/project/Project';
import Chatbot from '@/components/shared/ChatBot';
import Section from '@/components/section/Section';

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
        <Chatbot />
      </main>
    </ThemeProvider>
  );
}
