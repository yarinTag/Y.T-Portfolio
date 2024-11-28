'use client';
import React from 'react';
import Link from 'next/link';

import MobileMenu from './MobileMenu';
import NavLink, { INProps } from './NavLink';
import { ThemeContext } from '@/app/context';
import LightBulbOn from '@/app/icons/LightBulbOn';
import LightBulbOff from '@/app/icons/LightBulbOff';
import StyledBurger from './StyledBurger';

const navLinks: INProps[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/#about',
  },
  {
    title: 'Projects',
    href: '/#projects',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
];

const useTheme = () => React.useContext(ThemeContext);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className='fixed mx-auto top-0 left-0 right-0 z-50 bg-[#0D0D0D] bg-opacity-90 pt-4'>
      <div className='flex container items-center justify-between mx-auto px-4'>
        <Link
          href='/'
          className='text-2xl md:text-5xl text-white font-semibold'
        >
          Y.T
        </Link>
        <div className='toggle-theme'>
          <button
            className='flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white'
            onClick={() => toggleTheme(theme === '#0D0D0D' ? false : true)}
          >
            {theme === '#0D0D0D' ? <LightBulbOff /> : <LightBulbOn />}
          </button>
        </div>
        <div className='mobile-menu block md:hidden'>
          <StyledBurger isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen && <MobileMenu links={navLinks} />}
    </nav>
  );
};

export default Navbar;
