import CoreTeam from "./core";
import DevelopmentTeam from "./development";
import Staff from "./staff";

export default function Team({ staf, core }) {
    return (
        <div id="team" className='md:px-16 px-6 bg-dark items-center pb-28'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='font-Jost text-center font-bold md:text-5xl text-4xl text-white py-16'>
                    Meet Our Team
                </h1>
                {/* <h1 className='font-Jost text-center font-bold md:text-4xl text-3xl text-white'>
                    Our Staff
                </h1>
                <p className="font-Jost text-center font-normal md:text-2xl text-lg text-white py-4">Urna sem et lectus urna id arcu, elit rhoncus. Aliquet aliquet id diam est.</p>
                <div className='flex flex-wrap justify-center gap-x-6'>
                    {staf && staf.map((item) => (
                        <Staff
                            key={item.id}
                            name={item.name}
                            position={item.position}
                            image={item.image}
                        />
                    ))}
                </div> */}
                <h1 className='font-Jost text-center font-bold md:text-4xl text-3xl text-white'>
                    Core Team
                </h1>
                <p className="font-Jost text-center font-normal md:text-2xl text-lg text-white py-4">Urna sem et lectus urna id arcu, elit rhoncus. Aliquet aliquet id diam est.</p>
                <div className='flex flex-wrap justify-center gap-x-6'>
                    {core && core.map((item) => (
                        <CoreTeam
                            key={item.id}
                            name={item.name}
                            position={item.position}
                            image={item.image}
                        />
                    ))}
                </div>
                <h1 className='font-Jost text-center font-bold md:text-4xl text-3xl text-white pt-12'>
                    Development Team
                </h1>
                <p className="font-Jost text-center font-normal md:text-2xl text-lg text-white py-4">Urna sem et lectus urna id arcu, elit rhoncus. Aliquet aliquet id diam est.</p>
                <div className='flex flex-wrap justify-center gap-x-6'>
                    <DevelopmentTeam />
                </div>
            </div>
        </div>
    )
}
