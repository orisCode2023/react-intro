import { useState } from "react"

function ListItems() {
    const [item, setItem] = useState()
    const [items, setItems] = useState([])

    const chachInput = (e) => {
        setItem(e.target.value)
    }
    const add = () => {
        setItems((prev) => [...prev, item])
        console.log(items)
    }
    const remove = () => {
        setItems(items.filter((_value, idx) => idx !== items.length - 1))
        console.log(items)
    }
    return (
        <div>
            <input type="text" onChange={chachInput} />
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove Last</button>
        </div>
    )
}

export default ListItems