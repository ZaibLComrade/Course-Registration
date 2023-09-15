import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
	const [courseData, setCourseData] = useState([]);
	
	// Loading API resources
	useEffect(() => {
		fetch("courseData.json")
			.then(response => response.json())
			.then(resource => setCourseData(resource))
	}, [])
	
	return (
		<div className="container mx-auto space-y-8 pb-[50px]">
			<Header text="Course Registration"></Header>
			<div className="flex gap-4">
				<Cards content={ courseData }></Cards>
				<Sidebar></Sidebar>
			</div>
		</div>
	)
}

export default App
