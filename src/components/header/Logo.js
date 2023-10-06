'use client';
const Logo = ({ onClick, className }) => {
  return (
    <div onClick={onClick} className={className}>
      <picture>
        <img className='w-full h-full' src='/logo.svg' alt='Logo' />
      </picture>
    </div>
  );
};

export default Logo;
