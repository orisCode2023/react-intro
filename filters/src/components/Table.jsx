import employees from '../data/employees.json';
const employeesHeaders = Object.keys(employees[0])
function Table() {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    {employeesHeaders.map(key => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                    
                        {employeesHeaders.map(header => (
                            <td key={header}>{employee[header]}</td>
                        ))}
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table