import axios from "axios";

const EMPLOYEE_API_SPRINGBOOT_URL = "http://localhost:8081/api/v1/employees"

class EmployeeService {
    
    saveEmployee (employee){
        return axios.post(EMPLOYEE_API_SPRINGBOOT_URL, employee)
    }
}

export default new EmployeeService();
