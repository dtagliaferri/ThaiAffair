import React, { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";
import { db } from "../firebase";
import Table from "react-bootstrap/Table";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const updateEmployee = async (employeeObject) => {
    await db.collection("employees").doc().set(employeeObject);
  };

  const getEmployees = async () => {
    db.collection("employees").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setEmployees(docs);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div>
      <h1>Employee</h1>
      <AddEmployee updateEmployee={updateEmployee} update={false} />
      <Table responsive className="mt-2" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Cellphone</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.cell}</td>
              <td>
                <AddEmployee updateEmployee={updateEmployee} update={true} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Employees;
