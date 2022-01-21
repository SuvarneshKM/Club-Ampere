function Footer() {
  return (
    <div className='md:px-16 px-6 py-6'>
      <div className='max-w-7xl mx-auto'>
        <div className="flex md:justify-between justify-center">
          <p className="font-normal text-base text-dark">© 2022 ClubAmpere , Inc. All rights reserved</p>
          <div className="md:flex hidden text-center space-x-12">
            <a href="" className="font-normal text-base text-dark" >About</a>
            <a href="" className="font-normal text-base text-dark">Contact</a>
            <a href="" className="font-normal text-base text-dark">Topic</a>
            <a href="" className="font-normal text-base text-dark">Events</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
