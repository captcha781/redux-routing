import axios from "axios";

export const signin = async (data) => {
  try {
    const response = await axios({
      url: "https://dummyjson.com/auth/login",
      method: "POST",
      data,
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
