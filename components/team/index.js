import Staff from "./staff";

export default function Team() {
    const data = [{
        id: 1,
        name: 'Rajesh',
        image: './images/team/staff/1.jpeg',
        position: 'President',
    },
    {
        id: 2,
        name: 'Rajesh',
        image: './images/team/staff/2.jpeg',
        position: 'President',
    },
    {
        id: 3,
        name: 'Rajesh',
        image: './images/team/staff/3.jpeg',
        position: 'President',
    },
    {
        id: 4,
        name: 'Rajesh',
        image: './images/team/staff/4.jpeg',
        position: 'President',
    },
    {
        id: 5,
        name: 'Rajesh',
        image: './images/team/staff/5.jpeg',
        position: 'President',
    },
    ]
    return (
        <div className='md:px-16 px-6 bg-dark items-center pb-28'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='font-Jost text-center font-bold md:text-5xl text-4xl text-white py-16'>
                    Meet Our Team
                </h1>
                <h1 className='font-Jost text-center font-bold md:text-4xl text-xl text-white'>
                    Our Staff
                </h1>
                <p className="font-Jost text-center font-normal md:text-2xl text-lg text-white py-4">Urna sem et lectus urna id arcu, elit rhoncus. Aliquet aliquet id diam est.</p>
                <div className='flex flex-wrap justify-center gap-x-6 gap-y-12'>
                    {data.map((item) => (
                        <Staff
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            position={item.position}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}