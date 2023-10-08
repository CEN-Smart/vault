'use client';
import { Avatar, Flex, Heading } from '@chakra-ui/react';

const DashboardHeading = () => {
  return (
    <>
      <Flex className='items-center justify-between -mt-[4.5rem]'>
        <Heading
          size={{
            base: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl',
            '2xl': '2xl',
          }}
        >
          Welcome Abel!
        </Heading>
        <Avatar
          size={{
            base: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl',
            '2xl': '2xl',
          }}
          name='Abel'
          src='#'
        />
      </Flex>
    </>
  );
};

export default DashboardHeading;