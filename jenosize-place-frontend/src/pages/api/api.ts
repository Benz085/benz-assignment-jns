import axios from "axios";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const { NEXT_PUBLTC_API_URL } = serverRuntimeConfig;
const baseURL = NEXT_PUBLTC_API_URL;

export const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const customInstance = () =>
  axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

export const authorizationInstance = (authorization: string) =>
  axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ` + authorization,
    },
  });

export const apiPostData = async (url: string, data: any) => {
  try {
    const response = await instance.post(url, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
