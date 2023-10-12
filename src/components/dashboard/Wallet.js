'use client';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { GoShieldCheck } from 'react-icons/go';
import { IoWalletOutline } from 'react-icons/io5';

const cardItems = [
  { title: 'Total Savings', value: 100, icon: GoShieldCheck, action: 'New' },
  { title: 'Wallet', value: 10, icon: IoWalletOutline, action: 'Fund' },
];
const DashboardWalletCard = () => {
  const handleSavings = (action) => {
    action === 'New' ? alert('Please fund your wallet') : null;
  };

  return (
    <Flex className='flex-col gap-8 pt-6 '>
      <Box className='bg-card rounded-[1.25rem] p-4 shadow-secondary'>
        <Flex className='flex-col gap-8'>
          <Flex className='items-center justify-between'>
            <h3 className='font-[600] lg:text-3xl text-white/70'>
              Vault Wallet
            </h3>
            <Text className='flex items-center gap-1 cursor-pointer'>
              ID No. #1234567
            </Text>
          </Flex>
          <p className=' text-white lg:text-2xl font-[700] pb-8 flex flex-col gap-2'>
            <span className='text-white/70'>Available Balance</span>
            <span className='text-white/90'> ($) 10,000</span>
          </p>
          <Flex className='flex items-center justify-between w-full gap-2'>
            <div className='flex items-center text-[#05784E] rounded-md cursor-pointer  gap-2 bg-white px-6 flex-1 py-2 justify-center'>
              <BiMoneyWithdraw /> Withdraw
            </div>
            <div className='flex items-center text-[#05784E] gap-2 rounded-md justify-center bg-white px-6 py-2 flex-1 cursor-pointer'>
              <IoSettingsOutline /> Settings
            </div>
          </Flex>
        </Flex>
      </Box>
      <Box className='bg-card rounded-[1.25rem] p-4 shadow-secondary'>
        <Flex className='flex-col gap-8'>
          <Text className='font-[600] lg:text-3xl text-white/70 text-center'>
            Vault Wallet
          </Text>
          <div className='relative w-16 h-16 text-center'>
            <picture>
              <img className='w-full h-full' src='/barcode.svg' alt='Barcode' />
            </picture>
          </div>
        </Flex>
      </Box>
    </Flex>
  );
};

export default DashboardWalletCard;
