import Head from 'next/head';
import Hero from '../components/hero';
import Layout from '../components/layout';

export default function Home() {
  return (
    <div className='font-poppins bg-bg md:px-16 px-6 md:pt-6 pt-4'>
      <div className='max-w-7xl mx-auto'>
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
          {/* <h1 className='text-primary text-opacity-50'>Club Ampere ⚡</h1> */}
          <Hero />
        </Layout>
      </div>
    </div>
  );
}
