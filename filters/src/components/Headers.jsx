import { getDepartments, getStatus } from "../utils/utils.js"
function Headers() {
  const departments = getDepartments();
  const statuses = getStatus();
  return (
    <div>
        <input type="text" name="" id="" placeholder="Search by name or roll..."/>
        <select>
          <option value="">All</option>
          {departments.map((department, index) => (
            <option key={index} value={department}>{department}</option>
          ))}
        </select>
        <select>
          <option value="">All Statuses</option>
          {statuses.map((status, index) => (
            <option key={index} value={status}>{status}</option>
          ))}
        </select>
        <button>Reset</button>
    </div>
  )
}

export default Headers