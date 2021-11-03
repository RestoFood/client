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

const apiRestoMenu = {
  allRestoMenu,
};

export default apiRestoMenu;
