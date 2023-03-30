import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import List from "../components/List";
import Navigation from "../components/Navigation";
import { getAllPhonesService } from "../services/phone.services";

function Home() {
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
      <Navigation />
      <Layout>
        <h1>This are our available phones</h1>
        {isFetching && <h2>...loading data</h2>}
        {phones && <List items={phones} />}
      </Layout>
    </>
  );
}

export default Home;
