import service from "./config.services";

const getAllPhonesService = () => {
  return service.get("/phones");
};

const getSinglePhoneService = (phoneId) => {
  return service.get(`/phones/${phoneId}`);
};

export { getAllPhonesService, getSinglePhoneService };
