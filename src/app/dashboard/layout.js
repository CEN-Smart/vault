import DashboardLayout from '@/components/dashboard/DashboardLayout';
import React from 'react';

export const metadata = {
  title: 'Dashboard | Vault',
  description: 'Start saving and investing with ease',
};
const DashboardRootLayout = () => {
  return (
    <>
      <DashboardLayout />
    </>
  );
};

export default DashboardRootLayout;
