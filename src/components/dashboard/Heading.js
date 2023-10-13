'use client';
import { Avatar, Flex, Heading } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import axios from 'axios';


const DashboardHeading = () => {
// Make a request to the backend to check if the user is logged in use https://vaults.protechhire.com:8443/api/v1/auth/me/

  const pathname = usePathname();
  return (
    <>
      {pathname !== '/dashboard/profile' ? (
        <Flex className='items-center justify-between -mt-[4.5rem] pb-8'>
          <Heading
            size={{
              base: 'sm',
              md: 'md',
              lg: 'lg',
              xl: 'xl',
              '2xl': '2xl',
            }}
          >
            Welcome CEN Smart !
          </Heading>
          <Avatar
            className='bg-[#158E7F]'
            size={{
              base: 'sm',
              md: 'md',
              lg: 'lg',
              xl: 'xl',
              '2xl': '2xl',
            }}
            name='CEN Smart'
            src='#'
          />
        </Flex>
      ) : null}
    </>
  );
};

export default DashboardHeading;
