import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

export const handleAddHistory = async (data) => {
  try {
    const res = await instance.post("/addques", data);
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const handleFindHistory = async (data) => {
  try {
    const res = await instance.post("/findhistory", data);
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const handleClearHistory = async (data) => {
  try {
    const res = await instance.post("/clearhis", data);
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
