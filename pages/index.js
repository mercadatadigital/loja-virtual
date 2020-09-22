import Head from 'next/head';
import Header from '../components/header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loja Virtual - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}
