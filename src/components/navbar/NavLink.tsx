import Link from 'next/link';

export interface INProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: INProps) => {
  return (
    <Link
      href={href}
      className='block py-2 pr-4 pl-3 text-white hover:text-gray-300 font-medium'
    >
      {title}
    </Link>
  );
};

export default NavLink;
