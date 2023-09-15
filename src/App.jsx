import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';

function App() {

	// Loading API resources
	useEffect(() => {
		fetch("courseData.json")
			.then(response => response.json())
			.then(resource => console.log(resource))
	}, [])

  return (
    <>
		<Header text="Course Registration"></Header>
    </>
  )
}

export default App
