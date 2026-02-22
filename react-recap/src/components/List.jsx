function List({title, items}) {
  return (
    <div>
        {title && <h3>title</h3>}
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default List