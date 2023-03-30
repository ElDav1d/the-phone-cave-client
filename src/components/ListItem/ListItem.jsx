import { Link } from "react-router-dom";
function ListItem({ item }) {
  return (
    <li>
      <Link to={`/phone-details/${item._id}`}>
        <h5>{item.name}</h5>
      </Link>
    </li>
  );
}

export default ListItem;
