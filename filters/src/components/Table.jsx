import employees from '../data/employees.json';

function Table() {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    {Object.keys(employees[0]).map(key => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default Table