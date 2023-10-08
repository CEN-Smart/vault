'use client';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { Grid, GridItem, Box } from '@chakra-ui/react';

const DashboardLayout = ({ children }) => {
  return (
    <Box className='bg-black'>
      <Grid gridTemplateColumns='repeat(6,1fr)'>
        <GridItem
          overflow='hidden'
          maxH={{
            base: 'auto',
            md: '100vh',
          }}
          colSpan={{
            base: 6,
            lg: 2,
            xl: 1,
          }}
          borderRadius='0rem 0rem 1.875rem 0rem'
          bg='linear-gradient(89deg, #158E7F 30.58%, #43D680 106.84%)'
        >
          <DashboardNavbar />
        </GridItem>
        <GridItem
          h='100vh'
          overflowY='auto'
          colSpan={{
            base: 6,
            lg: 4,
            xl: 5,
          }}
          px='2rem'
          pt='6rem'
          pb='3rem'
        >
          {children}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DashboardLayout;
