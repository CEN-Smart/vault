'use client';
const Logo = ({ onClick, className, image }) => {
  return (
    <div onClick={onClick} className={className}>
      <picture>
        <img className='w-full h-full' src={image} alt='Logo' />
      </picture>
    </div>
  );
};

export default Logo;
