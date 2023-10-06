const Circle = ({ progress }) => {
  return (
    <div className='pb-10'>
      <svg
        width='120'
        height='120'
        viewBox='0 0 160 160'
        style={{ transform: ' rotate(-90deg)' }}
      >
        <circle
          r='70'
          cx='80'
          cy='80'
          fill='transparent'
          stroke='#e0e0e0'
          stroke-width='20px'
        ></circle>
        <circle
          r='70'
          cx='80'
          cy='80'
          fill='transparent'
          className=' bg-gradient-to-r from-[#43D680] to-[#158E7F] bg-clip-text text-transparent'
          stroke='#158E7F'
          stroke-linecap='round'
          stroke-width='20px'
          stroke-dasharray='439.6px'
          stroke-dashoffset={`${439.6 * ((100 - progress) / 100)}px`}
        ></circle>
      </svg>
    </div>
  );
};

export default Circle;
