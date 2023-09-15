import Card from "./Card";
import PropTypes from 'prop-types';

export default function Cards( { content } ) {
	return <div className="grid grid-cols-3 gap-6">
		{
			content.map(elem => <Card key={ elem.id } content = { elem }></Card>)
		}
	</div>
}

Cards.propTypes = {
	content: PropTypes.array.isRequired
}
