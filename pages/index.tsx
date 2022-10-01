import ExperiencePage from '../components/ExperiencePage'
import Hero from '../components/Hero'
import Header from '../components/Header'
import type {GetServerSideProps} from 'next';
import Head from 'next/head';
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link';
import { Experience,PageInfo,Skill,Project,Social } from '../typings'
import {fetchExperiences} from '../utils/fetchExperiences';
import {fetchSkills} from '../utils/fetchSkills';
import {fetchProjects} from '../utils/fetchProjects';
import {fetchPageInfo} from '../utils/fetchPageInfo';
import {fetchSocials} from '../utils/fetchSocials';

type Props= {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo,experiences,projects,skills,socials}: Props) =>{

  return(

    <div className="bg-[rgb(36,36,36)] text-white 
    min-h-screen snap-y snap-mandatory overlflow-y-scroll overlflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo?.name} - Portfolio </title>
      </Head>

      <Header socials = {socials} />

  
    <section id='hero' className="snap-start">
      <Hero pageInfo = {pageInfo} />        
    </section>

    {/* About */}
    <section id="about" className="snap-center ">
      <About pageInfo={pageInfo} />
    </section>

    {/* Experience */}
    <section id="experience" className="snap-center" >
      <ExperiencePage experiences={experiences} />
    </section>

    {/* Skills */}
    <section id="skills" className="snap-center" >
      <Skills skills={skills} />
    </section>

    {/* Projects */}
    <section id="projects" className="snap-start">
      <Projects projects={projects} />
    </section>

    {/* Contact-me */}
    <section id="contact" className="snap-start">
      <Contact pageInfo = {pageInfo} />
    </section>

    <Link href='#hero' >
      <footer className="sticky bottom-5 w-full cursor-pointer" >
        <div className="flex items-center justify-center" >
          <img 
          className="rounded-full h-10 w-10 filter transition-all duration-400 ease-in-out grayscale hover:grayscale-0 cursor-pointer"
          src="https://p.kindpng.com/picc/s/111-1110719_blue-home-page-icon-png-website-icon-home.png" 
          alt=""/>
        </div>
      </footer>
    </Link>
    </div>

    )
}

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async() =>{
    const pageInfo: PageInfo =await fetchPageInfo();
    const experiences: Experience[]  = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
        socials,
      }
    }
}