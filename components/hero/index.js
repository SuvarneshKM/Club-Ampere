function Hero() {
  return (
    <div className='md:px-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div
          className='pt-6 text-center bg-contain bg-center bg-no-repeat'
          style={{ backgroundImage: `url(./images/banner.png)` }}
        >
          <h2 className='pt-36 uppercase font-Jost font-bold md:text-5xl text-4xl text-black text-opacity-60'>
            Club
          </h2>
          <h1 className='pb-2 uppercase font-Jost font-bold md:text-9xl text-6xl text-black'>
            AMPERE
          </h1>
          <p className='font-normal md:text-lg text-sm text-black'>
            Aliquam sit massa feugiat sapien hac purus. Dictum in habitant eu
            vitae dolor.
          </p>
          <div className='pt-16 pb-24'>
            <button className='bg-secondary px-6 py-3 rounded-md text-white md:text-base text-sm font-medium'>
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
