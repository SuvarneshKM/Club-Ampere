import InstagramFillIcon from 'remixicon-react/InstagramFillIcon';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';

function Footer() {
  return (
    <div className='md:px-16 px-6 py-6'>
      <div className='max-w-7xl mx-auto'>
        <div className="flex md:flex-row flex-col-reverse md:justify-between">
          <p className="font-normal text-base text-dark pt-4 md:pt-0">© 2022 ClubAmpere , Inc. All rights reserved</p>
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

export default Footer;
