import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter as Router, Route} from "react-router-dom";
import { BrowserRouter ,Route, Link ,Routes} from "react-router-dom";
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <BrowserRouter>
     
       
        <Link to></Link>
        <Link to></Link>
        <Link to></Link>
        <Link to></Link>
        <Link to></Link>
      <div/>
      <Navbar />
      <br/>
      <Routes>
      <Route path="/" exact element={<ExercisesList/>} />
      <Route path="/edit/:id" element={<EditExercise/>} />
      <Route path="/create" element={<CreateExercise/>} />
      <Route path="/user" element={<CreateUser/>} />
      
      </Routes>

    </BrowserRouter>
  )
};

export default App;
