import PropTypes from 'prop-types';

export default function Header({ text }) {
	return <div className="mx-auto w-max">
		<h1 className="text-[32px] font-bold text-custom-black">{ text }</h1>
	</div>
}

Header.propTypes = {
	text: PropTypes.string.isRequired,
}
