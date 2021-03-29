import React, { useMemo } from 'react'
import API from '../../utils/api'

function EmployeeTable(props) {
    const { employee } = props
    return (
        <table>
            <caption>Employees</caption>
            <thread>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Status</th>
                </tr>
            </thread>
            <tbody>
                {employee.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}