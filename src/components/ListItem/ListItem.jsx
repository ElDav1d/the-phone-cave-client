import Image from "../Image";
function ListItem({ item }) {
  return (
    <li>
      <h3>{item.name}</h3>
      <Image
        imageFileName={item.imageFileName}
        altText={`a pic of ${item.name}`}
      />
    </li>
  );
}

export default ListItem;
