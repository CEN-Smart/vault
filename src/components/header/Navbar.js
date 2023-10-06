'use client';
import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter, usePathname } from 'next/navigation';
import cn from '@/utils/classmerge';
import Button from './../ui/Button';

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'Save', link: '/save' },
  { name: 'About', link: '/about' },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className='py-2 text-white'>
      <Container className='flex flex-col items-center justify-between md:flex-row'>
        <nav className='flex gap-8'>
          {menuItems.map((item) => (
            <Link
              className={cn({
                'font-bold border-b-4  border-b-emerald-400':
                  pathname === item.link,
              })}
              href={item.link}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div>
          <Logo
            onClick={() => router.push('/')}
            className='w-16 h-16 cursor-pointer'
          />
        </div>
        <div>
          <Button title='Sign In' />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
