import './App.css';
import Navbar from './components/Navbar';
import NewEmployee from './components/NewEmployee';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<EmployeeList />}/>
          <Route index element={<EmployeeList />}/>
          <Route path="/employeeList" element={<EmployeeList />}/>
          <Route path="/newemployee" element={<NewEmployee />}/>
          <Route path="/updateemployee/:id" element={<UpdateEmployee />}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
