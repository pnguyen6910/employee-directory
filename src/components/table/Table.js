import React, { useMemo } from 'react'
import API from '../../utils/api'
import { useTable } from 'react-table'

export const EmployeeTable = () => {
    const { getTableProps, getgetTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable({ columns, data })

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
}
