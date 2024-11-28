'use client';
import React from 'react';
import NavLink, { INProps } from './NavLink';

interface IMProps {
  links: INProps[];
}

const MobileMenu = (data: IMProps) => {
  return (
    <ul className='flex flex-col py-4 items-center md:hidden'>
      {data.links.map((link) => (
        <NavLink key={link.title} href={link.href} title={link.title} />
      ))}
    </ul>
  );
};

export default MobileMenu;
