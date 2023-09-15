import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header';

function App() {
	const [courseData, setCourseData] = useState([]);
	
	// Loading API resources
	useEffect(() => {
		fetch("courseData.json")
			.then(response => response.json())
			.then(resource => setCourseData(resource))
	}, [])
	
	return (
		<div className="container mx-auto space-y-8">
			<Header text="Course Registration"></Header>
			<Cards content={ courseData }></Cards>
		</div>
	)
}

export default App
