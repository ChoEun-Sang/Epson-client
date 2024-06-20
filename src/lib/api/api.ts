import axios from "axios";
import axiosClient from "./axiosClient";

//임시!!!!!!!!!!!!!
const axiosClient2 = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { "Content-Type": "application/json" },
});

export const getLetterDetail = async (letterId: string) => {
  try {
    const { data } = await axiosClient.get(`/letter/document/${letterId}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postKeywords = async (letterId: number, keywords: string[], title: string) => {
  try {
    const { data } = await axiosClient.post("/study", { letterId, keywords, title });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAITranslate = async (keyword: string) => {
  try {
    const { data } = await axiosClient2.post(`/api/gptapi?keyword=${encodeURIComponent(keyword)}`);
    return data.completion;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const signin = async (email: string, password: string) => {
  try {
    const { data } = await axiosClient.post("/auth/signin", { email, password });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserData = async () => {
  try {
    const { data } = await axiosClient.get("/user");
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSentMails = async () => {
  const { data } = await axiosClient.get("/letter/sent");
  return data;
};

export const getReceivedMails = async () => {
  const { data } = await axiosClient.get("/letter/received");
  return data;
};

export const getStudyMateiral = async () => {
  const { data } = await axiosClient.get("/study");
  return data;
};

export const connectDevice = async (deviceId: string) => {
  const { data } = await axiosClient.put(`/user/epsondevice?device=${deviceId}`);
  return data;
};

export const connectDeviceVerify = async () => {
  const { data } = await axiosClient.post("/auth");
  return data;
};
