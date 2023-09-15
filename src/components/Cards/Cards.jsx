import Card from "./Card";
import PropTypes from 'prop-types';

export default function Cards( { content, handleClickOnSelect } ) {
	const gridStyle = "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6";
	return <div className={ gridStyle }>
		{
			content.map(elem => 
			<Card 
				key={ elem.id }
				content={ elem }
				handleClickOnSelect={ handleClickOnSelect }
			></Card>)
		}
	</div>
}

Cards.propTypes = {
	content: PropTypes.array.isRequired,
	handleClickOnSelect: PropTypes.func.isRequired,
}
