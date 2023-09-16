import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [courseData, setCourseData] = useState([]);
	const [creditHour, setCreditHour] = useState(20);
	const [totalCreditHour, setTotalCreditHour] = useState(0);
	const [selectedCourse, setSelectedCourse] = useState([]);
	
	function handleClickOnSelect({ course_name, credit }) {
		
		if(selectedCourse.includes(course_name)) {
			toast.info('Course already selected', {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}
		if((creditHour -  credit) < 0) {
			toast.error('Insufficient credit hour', {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}
		setSelectedCourse([...selectedCourse, course_name]);
		setCreditHour(creditHour - credit);
		setTotalCreditHour(totalCreditHour + credit);
	}
	
	// Loading API resources
	useEffect(() => {
		fetch("courseData.json")
			.then(response => response.json())
			.then(resource => setCourseData(resource))
	}, [])
	
	return (
		<div className="container mx-auto space-y-8 py-[50px]">
			<Header text="Course Registration"></Header>
			<div className="flex flex-col flex-col-reverse mx-4 md:flex-row gap-4">
				<div>
					<Cards 
						content={ courseData }
						handleClickOnSelect = { handleClickOnSelect }
					></Cards>
				</div>
				<div className="shrink-0 md:w-[310px]">
					<Sidebar 
						selectedCourse={ selectedCourse }
						creditHour={ creditHour }
						totalCreditHour={ totalCreditHour }
					></Sidebar>
				</div>
			</div>
			<ToastContainer/>
		</div>
	)
}

export default App
