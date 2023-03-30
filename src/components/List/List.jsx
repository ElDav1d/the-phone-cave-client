import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPhonesService } from "../../services/phone.services";
import ListItem from "../ListItem";

function List() {
  const redirect = useNavigate();
  const [phones, setPhones] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsFetching(true);
      const response = await getAllPhonesService();
      setPhones(response.data);
      setIsFetching(false);
    } catch (error) {
      redirect("/error");
    }
  };

  return (
    <>
      {isFetching && <h2>...loading data</h2>}
      {phones && (
        <ul>
          {phones.map((item) => {
            return <ListItem key={item._id} item={item} />;
          })}
        </ul>
      )}
    </>
  );
}

export default List;
