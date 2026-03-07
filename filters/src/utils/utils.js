import employees from '../data/employees.json' with{type: 'json'}

export function getDepartments() {
    const departments = []
    employees.map(employee => {
        departments.push(employee.department)
    })
    return [...new Set(departments)]
}

export function getStatus(){
    const status = []
    employees.map(employee => {
        status.push(employee.status)
    })
    return [...new Set(status)]
}
