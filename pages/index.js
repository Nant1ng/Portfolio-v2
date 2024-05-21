import Head from "next/head";

import { fetchHero } from "@/lib/fetchHero";
import { fetchSocial } from "@/lib/fetchSocial";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home({ socialData, heroData }) {
  return (
    <>
      <Head>
        <title>Andrés Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <Header socials={socialData}/>
        <section id="hero" aria-label="Hero section">
          <Hero data={heroData}/>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const socialData = await fetchSocial();
  const heroData = await fetchHero();
  
  return {
    props: {
      socialData,
      heroData,
      
    },
  };
};
