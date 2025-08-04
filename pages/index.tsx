import Head from 'next/head';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>BeachFinder</title>
      </Head>
      <main className="min-h-screen">
        <Map />
      </main>
    </>
  );
}
