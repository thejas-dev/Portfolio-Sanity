import {PhoneIcon,MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings'

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props={
	pageInfo: PageInfo
}

export default function Contact({pageInfo}:Props) {
	// body...
	 const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
  	window.location.href = `mailto:thejaskala308@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}, ${formData.message} (${formData.email})`
  }

	return(
		<div className="mt-10 overflow-x-hidden space-y-10 min-h-screen relative flex flex-col text-center md:text-left max-w-xl 
		px-10 justify-evenly mx-auto items-center">
			<h3 className="uppercase tracking-[20px] text-gray-500 text-2xl" >
				Contact
			</h3>

			<div className="flex flex-col space-y-10">
				<h4 className="text-4xl font-semibold text-center" >
					I have got your Queries Lets Talk.{" "}
					<span className="decoration-[#F7AB0A]/50 underline">Contact me</span>
				</h4>
			</div>	

			<div className="space-y-10">
				<div className="flex items-center space-x-5 justify-center" >
					<PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
					<p className="text-2xl" >{pageInfo?.phoneNumber}</p>
				</div>
				<div className="flex items-center space-x-5 justify-center" >
					<MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
					<p className="text-2xl" >{pageInfo?.address}</p>
				</div>
				<div className="flex items-center space-x-5 justify-center" >
					<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
					<p className="text-2xl" >{pageInfo?.email}</p>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col space-y-2 w-fit mx-auto">
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2" >
						<input {...register('name')} placeholder="Name" className="contactInput"  type="text" />
						<input {...register('email')} placeholder="Email" className="contactInput"  type="email" />
					</div>
					<input {...register('subject')} placeholder="Subject" className="contactInput"  type="text" />

					<textarea {...register('message')} placeholder="Message" className="contactInput" />
					<button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
						Submit	
					</button>
				</form>
			</div>


<br/><br/><br/>
		</div>

		)
}