import { useRouter } from "next/router";
import InstagramFillIcon from 'remixicon-react/InstagramFillIcon';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';

function Header() {
  const router = useRouter();

  const Home = () => {
    router.push({
      pathname: '/',
    });
  };

  return (
    <div className='md:px-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between text-center items-center'>
          <button onClick={Home}>
            <img
              className='md:w-10 w-9 cursor-pointer'
              src='/images/logo.png'
              alt='Club Ampere'
            />
          </button>
          <ul className='hidden md:flex space-x-12 text-center items-center text-sm font-medium'>
            <a href="#event" onClick={Home} >
              <li className='text-black text-opacity-50 hover:text-opacity-100 cursor-pointer'>
                Events
              </li>
            </a>
            <a href="#guide" onClick={Home} >
              <li className='text-black text-opacity-50 hover:text-opacity-100 cursor-pointer'>
                Guide
              </li>
            </a>
            <a href="#team" onClick={Home} >
              <li className='text-black text-opacity-50 hover:text-opacity-100 cursor-pointer'>
                Team
              </li>
            </a>
            {/* <a href="#contact" onClick={Home} >
              <li className='text-black text-opacity-50 hover:text-opacity-100 cursor-pointer'>
                Contact
              </li>
            </a> */}
          </ul>
          {/* <button className='bg-secondary px-6 py-2 rounded-md text-white md:text-base text-sm font-medium'>
              Join
            </button> */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/club_ampere/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <InstagramFillIcon className="text-black text-opacity-50 hover:text-opacity-100 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/club_ampere/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <TwitterFillIcon className="text-black text-opacity-50 hover:text-opacity-100 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
