import PropTypes from 'prop-types'

export default function Card({ content }) {
	const { course_name, img } = content;
	return <div className="bg-white border-2">
		<div>
			<img src={ img } alt=""/>
		</div>
		<h1>{ course_name }</h1>
	</div>
}

Card.propTypes = {
	content: PropTypes.object.isRequired
}
