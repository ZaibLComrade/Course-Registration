# My Course Roaster

## Features

- **E-Commerce Website**: A dynamically built website to let users experience interactive shopping. Cart on the sidebar to keep record of courses user selected.
- **No Duplicate Purchase**: Any selected course cannot be re-selected and added to cart which ensures that users are not charged multiple times for the same course.
- **Account Credit Management**: Users are illustrated their spent and remaining credit hours which helps keep track of their balance when selecting courses.
- **Notification**: In attempt to add duplicate course on the cart or selecting course when remaining credit hours are not sufficient, Users are displayed notification accordingly.

## State Management

useState hook was imported from the react library and initialized states into the root parent component "App" for fetched data from api, remaining credit, spent credit hour and for courses that are added into cart. An additional hook useEffect was imported from the same library to fetch json data from the api. Both states for remaining credit hour and spent credit hour were initialized with appropriate values and passed to the child component "Sidebar" and displayed their values in the component.

In the "App" component, a handle function was declared to handle clicks from the select button of "Card" component. The function was drilled to the child component "Cards" and then passed to the target component "Card" by passing it as a prop.

When clicking select button of any card, the states for remaining credits and spent credits were updated using the their set functions in the handle function. To add names of selected courses, the selectedCourse state is updated with it's previous values and the new value by it's set function.
