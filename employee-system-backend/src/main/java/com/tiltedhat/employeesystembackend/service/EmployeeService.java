package com.tiltedhat.employeesystembackend.service;

import com.tiltedhat.employeesystembackend.model.Employee;

import java.util.List;

public interface EmployeeService{
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);
}
