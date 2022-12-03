import logo from './logo.svg';
import './App.css';
import Add from './components/add';
import {Editstudentdetails} from './components/editstudentdetails';
import {Studentmanagement} from './components/studentmanagementsystem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <>
    <BrowserRouter>
    <Routes> 
      <Route path='/' element={<Studentmanagement/>}/>
      <Route path='/Add' element={<Add />} />
      <Route path='/Editstudentdetails/:id' element={<Editstudentdetails/>}/>    </Routes>
    </BrowserRouter>
   
  </>
  );
}

export default App;
