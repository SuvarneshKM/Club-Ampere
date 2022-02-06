import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import { useRouter } from 'next/router';

export default function Syllabus() {
    const router = useRouter();

    const scheme = [
        2015,
        2019,
    ];
    const branch = [
        "EEE",
        "CE",
        "CS",
        "EC",
        "IT",
        "ME",
        "MCA",
    ];
    const [selectedScheme, setSelectedScheme] = useState(scheme[0]);
    const [selectedBranch, setSelectedBranch] = useState(branch[0]);

    function handleSubmit(e) {
        e.preventDefault();
        router.push(`./files/syllabus/${selectedBranch}_${selectedScheme}.pdf`);
    }

    return (
        <div className='font-poppins bg-bg md:pt-6 pt-4'>
            <div className=''>
                <Head>
                    <title>Club Ampere ⚡</title>
                    <link rel='icon' href='/favicon.ico' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <Layout>
                    <div className='md:px-16 px-6 w-auto h-screen sm:pt-36 pt-20'>
                        <h1 className='font-Jost text-center font-bold md:text-5xl text-4xl text-black py-4'>
                            Syllabus
                        </h1>
                        <p className='font-Jost text-center font-normal md:text-2xl text-lg text-black py-4'>
                            Urna sem et lectus urna id arcu, elit rhoncus. Aliquet aliquet id diam est.
                        </p>
                        <div className='flex flex-col space-y-3 items-center'>
                            <select
                                value={selectedScheme}
                                onChange={(e) => setSelectedScheme(e.target.value)}
                                className="form-select sm:w-96 w-full rounded-md">
                                {scheme.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={selectedBranch}
                                onChange={(e) => setSelectedBranch(e.target.value)}
                                className="form-select sm:w-96 w-full rounded-md">
                                {branch.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <div className='pt-3 sm:w-96 w-full'>
                                <button onClick={handleSubmit} className='rounded-md uppercase bg-secondary text-white sm:w-96 w-full py-2 font-semibold'>Submit</button>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </div>
    )
}
