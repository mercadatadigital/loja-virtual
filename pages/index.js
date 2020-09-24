import Head from 'next/head';
import Banner from '../components/banner';
import Card from '../components/card';
import Header from '../components/header';
import Section from '../components/section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loja Virtual - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Section title="Mais Relevantes" >
        <Card 
          image="/banner.png"
          title="Curso web"
          author="Vinicius"
          price="R$ 10,00"
        />
        <Card 
          image="/banner.png"
          title="Curso web"
          author="Vinicius"
          price="R$ 10,00"
        />
      </Section>
      <Section title="Mais Vendidos" >
        <Card 
          image="/banner.png"
          title="Curso web"
          author="Vinicius"
          price="R$ 10,00"
        />
      </Section>
    </div>
  )
}
