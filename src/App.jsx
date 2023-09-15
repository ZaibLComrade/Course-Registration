import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
	const [courseData, setCourseData] = useState([]);
	const [creditHour, setCreditHour] = useState(20);
	const [totalCreditHour, setTotalCreditHour] = useState(0);
	const [selectedCourse, setSelectedCourse] = useState([]);
	
	// Loading API resources
	useEffect(() => {
		fetch("courseData.json")
			.then(response => response.json())
			.then(resource => setCourseData(resource))
	}, [])
	
	return (
		<div className="container mx-auto space-y-8 pb-[50px]">
			<Header text="Course Registration"></Header>
			<div className="flex flex-col flex-col-reverse mx-4 md:flex-row gap-4">
				<div>
					<Cards content={ courseData }></Cards>
				</div>
				<div className="shrink-0">
					<Sidebar 
						selectedCourse={ selectedCourse }
						creditHour={ creditHour }
						totalCreditHour={ totalCreditHour }
					></Sidebar>
				</div>
			</div>
		</div>
	)
}

export default App
