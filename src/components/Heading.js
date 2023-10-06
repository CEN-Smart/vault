import Container from './Container';
const Heading = ({ top, center, bottom }) => {
  return (
    <>
      <Container className='flex flex-col gap-2 mx-auto text-center text-white'>
        <h3 className='text-lg font-[600]'>{top}</h3>
        <h2 className='font-[700] text-lg'>{center}</h2>
        <p className='text-sm text-white/70 '>{bottom}</p>
      </Container>
    </>
  );
};

export default Heading;
