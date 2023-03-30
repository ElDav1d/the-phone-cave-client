import Layout from "../Layout";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSinglePhoneService } from "../../services/phone.services";
import Image from "../Image/Image";

function PhoneCard() {
  const redirect = useNavigate();
  const params = useParams();
  const { phoneId } = params;
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, [phoneId]);

  const getData = async () => {
    try {
      setIsFetching(true);
      const response = await getSinglePhoneService(phoneId);
      setPhoneDetails(response.data);
      setIsFetching(false);
    } catch (error) {
      redirect("/error");
    }
  };

  return (
    <>
      <Layout>
        {isFetching && <h2>...loading data</h2>}
        {phoneDetails && (
          <article>
            <h1>{phoneDetails.name}</h1>
            <Image
              imageFileName={phoneDetails.imageFileName}
              alt={`a pic of ${phoneDetails.name}`}
            />
            <h3>Manufacturer: {phoneDetails.manufacturer}</h3>
            <h3>Processor: {phoneDetails.processor}</h3>
            <h3>Ram: {phoneDetails.ram}</h3>
            <h3>Screen: {phoneDetails.screen}</h3>
            <h2>{phoneDetails.price} €</h2>
          </article>
        )}
      </Layout>
    </>
  );
}

export default PhoneCard;
