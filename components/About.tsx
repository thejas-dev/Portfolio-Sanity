import {motion} from 'framer-motion'
import {urlFor} from '../sanity';
import { PageInfo } from '../typings'

type Props={
	pageInfo: PageInfo
}

export default function About({pageInfo}:Props) {
	// body...

	return(
		<motion.div 
		initial={{
			opacity:0,
		}}
		whileInView={{opacity:1}}
		transition={{duration:1.5}}
		className="h-screen flex space-y- relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 
		justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 md:top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>
			<motion.img 
			initial={{
				x:-200,
				opacity:0
			}}
			transition={{
				duration:1.2,
			}}
			whileInView={{x:0,opacity:1}}
			viewport={{once:true}}
			src={urlFor(pageInfo?.profilePic).url()}
			className="-mb-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[350px]"
			/>

			<div className="space-y-10 px-0 md:px-10" >
				<h4 className="text-4xl font-semibold" >
					Here is a <span className="underline decoration-[#F7AB0A]/50">Little</span> Info About Me
				</h4>
				<p className="text-base" >
					{pageInfo?.backgroundInformation}
					
				</p>
			</div>




		</motion.div>

		)
}