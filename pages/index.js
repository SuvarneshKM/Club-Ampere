import Head from 'next/head';
import Event from '../components/event';
import Guide from '../components/guide';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Team from '../components/team';

export default function Home({ staf, core }) {
  // console.log(datas)
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

export async function getStaticProps() {
  // Fetch data from external API
  const res1 = await fetch(`https://club-ampere-backend.herokuapp.com/api/stafs?populate=*`)
  const res2 = await fetch(`https://club-ampere-backend.herokuapp.com/api/cores?populate=*`)
  const staf = await res1.json()
  const core = await res2.json()

  // Pass data to the page via props
  return { props: { staf, core } }
}
