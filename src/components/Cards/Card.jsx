import PropTypes from 'prop-types'
import { FiDollarSign } from 'react-icons/fi'
import { TfiBook } from 'react-icons/tfi'

export default function Card({ content }) {
	const bottomStyle = "flex items-center gap-3"
	const { course_name, credit, img, description, price} = content;
	const logoStyle = "text-2xl"
	return <div className="flex flex-col justify-between p-4 bg-white rounded-lg">
		<div>
			<div className="mb-4 rounded-xl">
				<img src={ img } className="object-cover w-full h-full" alt=""/>
			</div>
			<div className="mb-5">
				<h1 className="mb-3 text-lg text-custom-black">{ course_name }</h1>
				<p className="text-custom-black/60">{ description }</p>
			</div>
		</div>
		
		<div className="">
			<div className="flex justify-around">
				<div className={ bottomStyle }>
					<FiDollarSign className={ logoStyle }/>
					<p className="text-custom-black/60">Price: { price }</p>
				</div>
				<div className={ bottomStyle }>
					<TfiBook className={ logoStyle }/>
					<p className="text-custom-black/60">Credit: { credit }hr</p>
				</div>
			</div>
			<div>
				<button className="text-white w-full bg-custom-blue py-[10px] mt-6 rounded-lg text-lg font-semibold">Select</button>
			</div>
		</div>
	</div>
}

Card.propTypes = {
	content: PropTypes.object.isRequired
}
