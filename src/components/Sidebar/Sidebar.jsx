export default function Sidebar() {
	const hrStyle = "text-xl font-bold my-4 text-custom-black"
	return <div className="p-6 bg-white border-2 h-max rounded-xl">
		<div className="w-[312px]">
			<p className="text-lg font-bold text-custom-blue">Credit Hour Remaining:</p>
			<hr className={ hrStyle }/>
			
			<h2 className={ hrStyle }>Course Name</h2>
			<div>
				<ol className="mt-5 mb-6 ml-4 list-decimal text-custom-black/60">
					<li>Introduction to C programming</li>
				</ol>
			</div>
			
			<hr className={ hrStyle }/>
			
			<p className="font-medium text-custom-black/80">Total Credit Hour:</p>
		</div>
	</div>
}
