import axios from "axios";
import config from "../config/config";

const allRestoMenu = async () => {
  try {
    const response = await axios.get(`${config.domain}/restomenu/`);
    return response.data;
  } catch (err) {
    return await err.message;
  }
};

const allRestoMenubyRetoId = async (id) => {
  try {
    const response = await axios.get(`${config.domain}/restomenu/reto/${id}`);
    return response.data;
  } catch (error) {
    return await error.message;
  }
};

const apiRestoMenu = {
  allRestoMenu,
  allRestoMenubyRetoId,
};

export default apiRestoMenu;
