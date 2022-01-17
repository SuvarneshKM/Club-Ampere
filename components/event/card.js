function Card({ key, title, image, date, stat }) {
  return (
    <div
      className='w-96 h-96 rounded-2xl'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='p-2'>
        {stat == 'Coming soon' ? (
          <button className='font-bold text-xs text-white px-4 py-2 bg-alert bg-opacity-80 rounded-3xl'>
            {stat}
          </button>
        ) : (
          <button className='font-bold text-xs text-white px-4 py-2 bg-sucess bg-opacity-80 rounded-3xl'>
            {stat}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
