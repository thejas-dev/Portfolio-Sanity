import {motion} from 'framer-motion'
import {Skill as SkillType} from '../typings';
import {urlFor} from '../sanity';

type Props = {
	skill: SkillType;
	directionLeft?: boolean;
}
export default function Skill({ skill, directionLeft}:Props) {
	// body...
	return(
		<div className="group realtive flex cursor-pointer" >
			<motion.img
			initial={{
				opacity:0,
				x:directionLeft ? -80 : 80,
			}}
			transition={{duration:1}}
			whileInView={{opacity:1,x:0}}
			src={urlFor(skill?.image).url()}
			alt="...."
			className="rounded-full border-gray-500 object-cover h-20 w-20 xl:w-32 xl:h-32 md:w-28 md:h-28 filter
			group-hover:grayscale transition duration-300 ease-in-out"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out 
			group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full z-0" >
				<div className="flex items-center justify-center h-full" >
					<button className="text-2xl text-black opacity-100 font-bold" >{skill?.progress}%</button>
				</div>
			</div>
		</div>

		)
}