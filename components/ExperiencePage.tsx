import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'
type Props={
	experiences:Experience[];

}
export default function ExperiencePage({experiences}:Props) {
	// body...

	return(
		<motion.div 
		initial={{
			opacity:0,
		}}
		whileInView={{opacity:1}}
		transition={{duration:1.5}}
		className="h-screen relative scrollbar-thin flex flex-col text-left 
		max-w-full px-10 justify-evenly mx-auto items-center" >
			<h3 className=" top-24 md:-top-24 uppercase tracking-[20px] scrollbar-track-gray-400 text-gray-500 text-2xl">
				Experience
			</h3>
			<div className="w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory
			scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{experiences.map((experience)=>(
					<ExperienceCard key={experience._id} experience={experience} />
				))}
			</div>
		</motion.div>

		)
}