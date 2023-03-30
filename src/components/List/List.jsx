import ListItem from "../ListItem";

function List({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <ListItem key={item._id} item={item} />;
      })}
    </ul>
  );
}

export default List;
