import Card from './card';

function Event() {
  const data = [
    {
      id: 1,
      title: 'Logo Launching',
      image: './images/events/event1.jpg',
      date: 'March 26 , 2019',
      stat: 'Event Ended',
    },
    {
      id: 2,
      title: 'Event 2',
      image: './images/events/2.jpeg',
      date: 'September 22 , 2021',
      stat: 'Register Now',
    },
    {
      id: 3,
      title: 'Event 3',
      image: './images/events/5.jpeg',
      date: 'November 18 , 2021',
      stat: 'Coming soon',
    },
    {
      id: 4,
      title: 'Event 4',
      image: './images/events/4.jpeg',
      date: 'December 18 , 2021',
      stat: 'Register Now',
    },
  ];
  return (
    <div id='event' className='md:px-16 px-6 pb-24'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='font-Jost text-center font-bold md:text-5xl text-4xl text-black pb-16'>
          Event
        </h1>
        <div className='flex flex-wrap justify-center gap-x-6 gap-y-12'>
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              date={item.date}
              stat={item.stat}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
