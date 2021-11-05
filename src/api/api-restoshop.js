import axios from "axios";
import config from "../config/config";

const allRestoShop = async () => {
  try {
    const response = await axios.get(`${config.domain}/resto-shop/`);
    return response.data;
  } catch (error) {
    return await error.message;
  }
};

const findRestoById = async (id) => {
  try {
    const response = await axios.get(`${config.domain}/resto-shop/${id}`);
    return response.data;
  } catch (error) {
    return await error.message;
  }
};

const apiRestoShop = {
  allRestoShop,
  findRestoById,
};

export default apiRestoShop;
