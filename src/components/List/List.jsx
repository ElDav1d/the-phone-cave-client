function List({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item._id}>{item.name}</li>;
      })}
    </ul>
  );
}

export default List;
