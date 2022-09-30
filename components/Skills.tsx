import  {motion} from 'framer-motion'
import Skill from './Skill'
import {Skill as SkillType} from '../typings';


type Props = {
	skills:SkillType[];
}
export default function Skills({skills}:Props) {
	// body...

	return(
		<motion.div 
		initial={{
			opacity:0,
		}}
		whileInView={{opacity:1}}
		transition={{duration:1.5}}
		className="relative mt-20 flex flex-col text-center md:text-left overflow-hidden xl:flex-row max-w-[2000px]
		xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">	
			<h3 className="absolute top-[40px] uppercase tracking-[20px] text-gray-500 text-2xl" >
				Skills
			</h3>

			<h3 className="top-[70px] uppercase tracking-[3px] text-gray-500 text-sm absolute" >Hover Over a Skill For Current Profieciency</h3>

			<div className="grid grid-cols-4 gap-3">
				{skills?.slice(0,skills.length/2).map((skill)=>(
					<Skill key={skill._id} skill={skill} />
				))}

				{skills?.slice(skills.length/2,skills.length).map((skill)=>(
					<Skill key={skill._id} skill={skill} directionLeft/>
				))}
				
			</div>
		</motion.div>


		)
}