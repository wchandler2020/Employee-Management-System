import axios from "axios";

const EMPLOYEE_API_SPRINGBOOT_URL = "http://localhost:8081/api/v1/employees"

class EmployeeService {
    
    saveEmployee (employee){
        return axios.post(EMPLOYEE_API_SPRINGBOOT_URL, employee);
    }

    getEmployees() {
        return axios.get(EMPLOYEE_API_SPRINGBOOT_URL);
    }

    deleteEmployee(id){
        return axios.delete(`${EMPLOYEE_API_SPRINGBOOT_URL}/${id}`)
    }

    getEmployeeById(id){
        return axios.get(`${EMPLOYEE_API_SPRINGBOOT_URL}/${id}`)
    }

    updateEmployee(employee, id){
        return axios.put(`${EMPLOYEE_API_SPRINGBOOT_URL}/${id}`, employee)
    }
}

export default new EmployeeService();
