import { SocialIcon } from 'react-social-icons';
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings'
type Props = {
	socials: Social[]
}

export default function Header({ socials }: Props) {
	// body...
	return(
		<header className="sticky top-0 overflow-x-hidden flex items-start justify-between max-w-7xl p-5 mx-auto z-20 xl:items-center" >	
			<motion.div 
			initial={{
				x:-500,
				opacity:0,
				scale:0.5,
			}}
			animate={{
				x:0,
				opacity:1,
				scale:1
			}}
			transition={{
				duration:1.5,
			}}
			className="flex flex-row items-center">
				{socials.map((social)=>(
					<SocialIcon 
					key={social._id}
					url={social.url} 					
					fgColor='gray' 
					bgColor='transparent' 
				/>
				))}
		
				{/*Social Icons*/}
			</motion.div>


			<Link href="#contact">
			<motion.div
			initial={{
				x:500,
				opacity:0,
				scale:0.5,
			}}
			animate={{
				x:0,
				opacity:1,
				scale:1
			}}
			transition={{
				duration:1,
			}}
			className="flex flex-row items-center text-gray-300 cursor-pointer" >
				<SocialIcon 
				className="cursor-pointer"
				network="email"
				fgColor="gray"
				bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-gray-400" >Get in Touch</p>
			</motion.div>
			</Link>
		</header>

		)
}