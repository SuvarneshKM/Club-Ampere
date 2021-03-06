import Card from './card';

export default function Guide() {
  return (
    <div id='guide' className='md:px-16 px-6 bg-dark items-center pb-28'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='font-Jost text-center font-bold md:text-5xl text-4xl text-white py-16'>
          Guide
        </h1>
        <Card />
      </div>
    </div>
  );
}
