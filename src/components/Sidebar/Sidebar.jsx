import PropTypes from 'prop-types';

export default function Sidebar({ creditHour, totalCreditHour, selectedCourse }) {
	const hrStyle = "text-xl font-bold my-4 text-custom-black"
	const listContent = selectedCourse.map((elem, idx) => <li key={ idx }>{ elem }</li>)
	return <div className="p-6 bg-white h-max rounded-xl">
		<div>
			<p className="text-lg font-bold text-custom-blue">Credit Hour Remaining: { creditHour }</p>
			<hr className={ hrStyle }/>
			
			<h2 className={ hrStyle }>Course Name</h2>
			<div>
				<ol className="mt-5 mb-6 ml-4 list-decimal space-y-2 text-custom-black/60">
					{ listContent }
				</ol>
			</div>
			<hr className={ hrStyle }/>
			
			<p className="font-medium text-custom-black/80">Total Credit Hour: { totalCreditHour }</p>
		</div>
	</div>
}

Sidebar.propTypes = {
	creditHour: PropTypes.number.isRequired,
	totalCreditHour: PropTypes.number.isRequired,
	selectedCourse: PropTypes.array.isRequired,
}
