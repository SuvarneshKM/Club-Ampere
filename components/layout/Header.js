function Header() {
  return (
    <div className='flex justify-between text-center items-center'>
      <img
        className='md:w-8 w-7 cursor-pointer'
        src='/images/logo.png'
        alt='Club Ampere'
      />
      <ul className='hidden md:flex space-x-12 text-center items-center text-sm font-medium'>
        <li className='text-black text-opacity-50 hover:text-opacity-100 cursor-pointer'>
          Events
        </li>
        <li className='text-black text-opacity-50 hover:text-opacity-100 cursor-pointer'>
          Guide
        </li>
        <li className='text-black text-opacity-50 hover:text-opacity-100 cursor-pointer'>
          Team
        </li>
        <li className='text-black text-opacity-50 hover:text-opacity-100 cursor-pointer'>
          Contact
        </li>
      </ul>
      <div>
        <button className='bg-secondary px-6 py-2 rounded-md text-white md:text-base text-sm font-medium'>
          Join
        </button>
      </div>
    </div>
  );
}

export default Header;
