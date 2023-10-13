'use client';
import { Avatar, Flex, Heading, useToast } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { useEffect } from 'react';
import { data } from 'autoprefixer';

const DashboardHeading = () => {
  const pathname = usePathname();
  const toast = useToast();
  // Make a request to the backend to check if the user is logged in use https://vaults.protechhire.com:8443/api/v1/auth/me/

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await axios.get(
          'https://vaults.protechhire.com:8443/api/v1/auth/me/'
        );
        // Handle the response here
        const data = response.data;
      } catch (error) {
        // Handle any errors here
        toast({
          position: 'top',
          title: 'Error',
          description: error.response.data.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };
    checkUserLoggedIn();
  }, [toast]);

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
            {`Welcome back`}
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
