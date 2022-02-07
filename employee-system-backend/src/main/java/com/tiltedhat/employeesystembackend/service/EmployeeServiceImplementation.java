package com.tiltedhat.employeesystembackend.service;

import com.tiltedhat.employeesystembackend.entity.EmployeeEntity;
import com.tiltedhat.employeesystembackend.model.Employee;
import com.tiltedhat.employeesystembackend.respository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImplementation implements EmployeeService{
    private EmployeeRepository employeeRepository;

    public EmployeeServiceImplementation(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();
        List<Employee> employees = employeeEntities.stream().map(emp -> new Employee(emp.getId(),
                                                                                     emp.getFirstName(),
                                                                                     emp.getLastName(),
                                                                                     emp.getEmailId()
        )).collect(Collectors.toList());
        return employees;
    }
}
