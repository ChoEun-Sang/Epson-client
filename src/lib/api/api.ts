import axios from "axios";
import axiosClient from "./axiosClient";

const axiosClient2 = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { "Content-Type": "application/json" },
});

export const getLetterDetail = async (letterId: string) => {
  const { data } = await axiosClient.get(`/letter/${letterId}`);
  return data;
};

export const postKeywords = async (keywords: string[]) => {
  const { data } = await axiosClient.post("keywords", keywords);
  return data;
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
  const { data } = await axiosClient.get("api/letter/sent");
  return data;
};

export const getReceivedMails = async () => {
  const { data } = await axiosClient.get("/letter/received");
  return data;
};
