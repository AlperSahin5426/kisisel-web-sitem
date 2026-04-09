import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
export const hireMeRequest = (formData) => {
  return axios.post("https://reqres.in/api/users", formData, {
    headers: {
      "x-api-key": API_KEY 
    }
  })
    .then((response) => {
      console.log("Başarılı:", response.data);
      return response.data;
    })
    .catch((err) => {
      console.error("Hata:", err);
      throw err; 
    });
};