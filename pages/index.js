import Head from 'next/head';
import Event from '../components/event';
import Guide from '../components/guide';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Team from '../components/team';

export default function Home() {
  const staf = [
    {
      id: 1,
      name: 'Jakub',
      position: 'CEO',
      image: './images/team/staff/1.jpeg',
    },
    {
      id: 2,
      name: 'Jakub',
      position: 'CEO',
      image: './images/team/staff/2.jpeg',
    },
    {
      id: 3,
      name: 'Jakub',
      position: 'CEO',
      image: './images/team/staff/3.jpeg',
    },
    {
      id: 4,
      name: 'Jakub',
      position: 'CEO',
      image: './images/team/staff/4.jpeg',
    },
    {
      id: 5,
      name: 'Jakub',
      position: 'CEO',
      image: './images/team/staff/5.jpeg',
    },
  ]

  const core = [
    {
      id: 1,
      name: 'Name 1',
      position: 'Lead',
      image: './images/team/core/1.jpeg',
    },
    {
      id: 2,
      name: 'Name 2',
      position: 'Co-Lead',
      image: './images/team/core/2.jpeg',
    },
    {
      id: 3,
      name: 'Name 3',
      position: 'Tech Lead',
      image: './images/team/core/3.jpeg',
    },
    {
      id: 4,
      name: 'Name 4',
      position: 'Out Reach Lead',
      image: './images/team/core/4.jpeg',
    },
    {
      id: 5,
      name: 'Name 5',
      position: 'Creative Lead',
      image: './images/team/core/5.jpeg',
    },
  ]

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
          <Hero />
          <Event />
          <Guide />
          <Team staf={staf} core={core} />
        </Layout>
      </div>
    </div>
  );
}
