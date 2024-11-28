'use client';
import React from 'react';

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const StyledBurger = ({ isOpen, toggleMenu }: Props) => {
  function handleOpen() {
    toggleMenu();
  }

  return (
    <div
      className={`
         z-20 flex flex-col justify-around w-8 h-8
        cursor-pointer md:hidden
      `}
      onClick={handleOpen}
    >
      <div
        className={`
          w-8 h-1 rounded-lg bg-[#fff] duration-300
          ${isOpen ? 'rotate-45 origin-top-left' : 'rotate-0'}
        `}
      />
      <div
        className={`
          w-8 h-1 rounded-lg bg-[#fff] duration-300
          ${isOpen ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
        `}
      />
      <div
        className={`
          w-8 h-1 rounded-lg bg-[#fff] duration-300
          ${isOpen ? '-rotate-45 origin-bottom-left' : 'rotate-0'}
        `}
      />
    </div>
  );
};

export default StyledBurger;
