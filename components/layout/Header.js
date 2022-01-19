function Header() {
  return (
    <div className='md:px-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between text-center items-center'>
          <img
            className='md:w-10 w-9 cursor-pointer'
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
      </div>
    </div>
  );
}

export default Header;
