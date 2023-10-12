'use client';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

import { Field, Form, Formik } from 'formik';
import Button from '../ui/Button';
export default function SavingsForm({ onClose, isOpen }) {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Box
            bg='black'
            color='white'
            p={10}
            className='shadow-primary'
            borderRadius='md'
          >
            <Formik
              initialValues={{
                amount: '',
                duration: '',
                days: '',
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              {({ handleSubmit, errors, touched }) => (
                <Form onSubmit={handleSubmit}>
                  <VStack spacing={6}>
                    <FormControl isInvalid={!!errors.amount && touched.amount}>
                      <Field
                        className='bg-[#293534] shadow-form'
                        as={Input}
                        name='amount'
                        id='amount'
                        type='number'
                        variant='filled'
                        placeholder='Amount to Lock'
                        validate={(value) => {
                          let error;
                          if (!value) {
                            error = 'Enter an Amount';
                          }
                          return error;
                        }}
                      />
                      <FormLabel
                        className='text-sm text-white/70'
                        htmlFor='amount'
                      >
                        Wallet Balance: (&euro;)10,000{' '}
                      </FormLabel>
                      <FormErrorMessage>{errors.amount}</FormErrorMessage>
                    </FormControl>
                    <div className='flex flex-col items-center w-full gap-4 sm:flex-row'>
                      <FormControl
                        isInvalid={!!errors.duration && touched.duration}
                      >
                        <Field
                          className='bg-[#293534] shadow-form w-full'
                          as={Input}
                          name='duration'
                          id='duration'
                          type='number'
                          variant='filled'
                          placeholder='Lock Duration'
                          validate={(value) => {
                            let error;
                            if (!value) {
                              error = 'Enter Duration';
                            }
                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.duration}</FormErrorMessage>
                      </FormControl>

                      {/* Selection*/}
                      <FormControl isInvalid={!!errors.days && touched.days}>
                        <Field
                          as='select'
                          name='days'
                          id='days'
                          className='bg-[#293534] shadow-form w-full p-2 text-white/70'
                          validate={(value) => {
                            let error;
                            if (!value) {
                              error = 'Enter an Duration';
                            }
                            return error;
                          }}
                        >
                          {['Days', 'Weeks', 'Months', 'Years'].map(
                            (option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            )
                          )}
                        </Field>
                        <FormErrorMessage>{errors.days}</FormErrorMessage>
                      </FormControl>
                    </div>
                    <Button
                      className='w-full'
                      title='Lock Funds'
                      type='submit'
                    />
                  </VStack>
                </Form>
              )}
            </Formik>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
