import Head from "next/head";
import Link from "next/link";

import { fetchHero } from "@/lib/fetchHero";
import { fetchSocial } from "@/lib/fetchSocial";
import { fetchAbout } from "@/lib/fetchAbout";
import { fetchExperience } from "@/lib/fetchExperience";
import { fetchSkill } from "@/lib/fetchSkill";
import { fetchProject } from "@/lib/fetchProject";
import { fetchContact } from "@/lib/fetchContact";
import { fetchWeather } from "@/lib/fetchWether";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Reference from "@/components/Reference";
import Contact from "@/components/Contact";

import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

export default function Home({
  socialData,
  heroData,
  aboutData,
  experienceData,
  skillData,
  projectData,
  contactData,
  weatherData,
}) {
  return (
    <>
      <Head>
        <title>Andrés Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Andrés Portfolio - showcasing projects, skills, and professional experiences."
        />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2F2F2F" />
        {/* Open Graph */}
        <meta property="og:title" content="Andrés Portfolio" />
        <meta
          property="og:description"
          content="Explore Andrés' professional journey, skills, and projects."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio-nant1ng.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path-to-your-image.jpg"
        />
        <meta property="og:site_name" content="Andrés Portfolio" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yourTwitterHandle" />
        <meta name="twitter:title" content="Andrés Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Andrés' professional journey, skills, and projects."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/path-to-your-image.jpg"
        />
        <meta name="twitter:site" content="@yourTwitterHandle" />
      </Head>
      <div className="container">
        <main>
          <Header socials={socialData} />
          <section id="hero" className="snap-start" aria-label="Hero section">
            <Hero data={heroData} />
          </section>
          <section id="about" className="snap-start">
            <About data={aboutData} />
          </section>
          <section id="experience" className="snap-center">
            <Experience data={experienceData} />
          </section>
          <section id="skills" className="snap-center">
            <Skill data={skillData} />
          </section>
          <section id="projects" className="snap-center">
            <Project data={projectData} />
          </section>
          {/* <section id="reference" className="snap-center">
            <Reference />
          </section> */}
          <section id="contact" className="snap-start">
            <Contact data={contactData} weather={weatherData} />
          </section>
        </main>
        <Link href="#hero" aria-label="Return to hompage section">
          <footer>
            <div className="icon-container">
              <ArrowUpCircleIcon className="arrow-icon" />
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const socialData = await fetchSocial();
  const heroData = await fetchHero();
  const aboutData = await fetchAbout();
  const experienceData = await fetchExperience();
  const skillData = await fetchSkill();
  const projectData = await fetchProject();
  const contactData = await fetchContact();
  const weatherData = await fetchWeather();

  return {
    props: {
      socialData,
      heroData,
      aboutData,
      experienceData,
      skillData,
      projectData,
      contactData,
      weatherData,
    },
  };
};
