import {useTypewriter, Cursor} from 'react-simple-typewriter'
// import Typewriter from 'typewriter-effect'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import {useEffect} from 'react'
import {PageInfo} from '../typings';
import {urlFor} from '../sanity';

type Props = {
	pageInfo: PageInfo;
}



export default function Hero({pageInfo}:Props) {
	// body...et text = ''
	const text = "<ThejasHari/>"
	// const [text]= useTypewriter({
	// 	words: ['<ThejasHari/>','<Engineer/>','<Developer/>'],
	// 	loop: true,
	// 	delaySpeed: 2000,	
	// })
	
	
	
	//{text !== undefined ? text : ""}

	return( 
		<div className="min-h-screen flex flex-col space-y-8 items-center justify-center text-center
		overflow-hidden " >	
			<BackgroundCircles/>
			<img 
			className="relative rounded-full h-32 w-32 mx-auto object-cover"
			src={urlFor(pageInfo?.heroImage).url()}
			alt=""/>
			<div className="z-20" >	
				<h2 className="text-sm text-gray-500 pb-2 tracking-[15px] uppercase">
					{pageInfo?.role}
				</h2>

				<h1 className="text-5xl mt-2 lg:text-6xl font-semibold px-10" >	
					<span className="mr-3 animate-pulse" >
						{text}
					</span>
					<Cursor cursorColor="#F7AB0A"/>
				</h1>
				<div className="pt-5" >
					<Link href="#about" >
						<button className="heroButton" >About</button>
					</Link>
					<Link href="#experience" >
						<button className="heroButton" >Experience</button>
					</Link>
					<Link href="#skills" >
						<button className="heroButton" >Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton" >Projects</button>
					</Link>


				</div>	
			</div>
		</div>
		)
}