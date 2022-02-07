import './App.css';
import Navbar from './components/Navbar';
import NewEmployee from './components/NewEmployee';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from './components/EmployeeList';

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
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
