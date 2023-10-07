'use client';
import React from 'react';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import {
  Box,
  Center,
  InputGroup,
  InputRightElement,
  FormControl,
  FormErrorMessage,
  Grid,
  Heading,
  Input,
  Text,
  VStack,
  ButtonGroup,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import SocialBtn from '@/components/SocialBtn';
import Logo from '@/components/header/Logo';

const LogIn = () => {
  const [show, setShow] = React.useState(false);

  const handleTogglePassword = () => setShow(!show);

  return (
    <Box as='section' className='bg-login'>
      <Grid className='min-h-screen' placeItems='center'>
        <Center>
          <Logo image={'/logo-header.svg'} />
        </Center>
        <Box
          bg='black'
          color='white'
          w={{
            base: '90%',
            md: '70%',
            lg: '40%',
          }}
          p={6}
          borderRadius='xl'
        >
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            {({ handleSubmit, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <Center className='flex flex-col gap-2 pb-8 text-center'>
                    <Heading>Log in</Heading>
                    <Text>
                      New to vault?{' '}
                      <Link className=' text-[#51EC81]' href='/register'>
                        Create an account
                      </Link>
                    </Text>
                  </Center>
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <Field
                      className='bg-[#293534] shadow-form'
                      as={Input}
                      name='email'
                      id='email'
                      type='email'
                      variant='filled'
                      placeholder='Enter your email'
                      validate={(value) => {
                        let error;
                        if (!value) {
                          error = 'Email is required';
                        }
                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <InputGroup size='md'>
                      <Field
                        className='bg-[#293534] shadow-form'
                        pr='4.5rem'
                        as={Input}
                        name='password'
                        id='password'
                        type={show ? 'text' : 'password'}
                        variant='filled'
                        placeholder='Password'
                        validate={(value) => {
                          let error;
                          if (!value) {
                            error = 'Password is required';
                          } else if (value.length < 8) {
                            error =
                              'Password must be at least 8 characters long';
                          }
                          return error;
                        }}
                      />
                      <InputRightElement width='4.5rem'>
                        <button
                          h='1.75rem'
                          size='sm'
                          onClick={handleTogglePassword}
                        >
                          {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <Button className='w-full' title='Log In' type='submit' />
                  <Link
                    className='text-center text-[#51EC81]'
                    href='/forgot-password'
                  >
                    Forgot Password?
                  </Link>
                  <Text className='flex items-center justify-center gap-4 form-or'>
                    or
                  </Text>

                  <ButtonGroup className='w-full'>
                    <SocialBtn
                      className='flex-1 w-full'
                      bgColor='#fff'
                      image={'/google.svg'}
                      alt='Google'
                    />
                    <SocialBtn
                      className='flex-1 w-full hover:bg-blue-500'
                      bgColor='#0676Eb'
                      image={'/facebook.svg'}
                      alt='Facebook'
                    />
                  </ButtonGroup>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Box>
  );
};

export default LogIn;
