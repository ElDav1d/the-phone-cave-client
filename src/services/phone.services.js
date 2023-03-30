import service from "./config.services";

const getAllPhonesService = () => {
  return service.get("/phones");
};

const getSinglePhoneDetails = (phoneId) => {
  return service.get(`/phones/${phoneId}`);
};

export { getAllPhonesService, getSinglePhoneDetails };
