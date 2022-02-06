function Card({ title, image, date, stat }) {
  return (
    <div
      className='w-96 h-96 rounded-xl p-2 flex flex-col justify-between bg-contain'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=''>
        {stat && (
          stat == 'Register Now' ? (
            <button className='font-bold text-xs text-white px-4 py-2 bg-sucess bg-opacity-80 rounded-3xl'>
              {stat}
            </button>
          ) : (
            <button className='font-bold text-xs text-white px-4 py-2 bg-alert bg-opacity-80 rounded-3xl'>
              {stat}
            </button>
          )
        )}
      </div>
      <div className='bg-black backdrop-filter backdrop-blur bg-opacity-30 firefox:bg-opacity-90 rounded-2xl pl-6 py-3'>
        <h1 className='text-white font-bold md:text-2xl text-lg'>{title}</h1>
        <p className='text-white text-opacity-70 font-normal md:text-lg text-base'>
          {date}
        </p>
      </div>
    </div>
  );
}

export default Card;
