import axios from "axios";
import axiosClient from "./axiosClient";

const imageBaseURL = process.env.NEXT_PUBLIC_FILE_URL;

export const getLetterDetail = async (letterId: string | null) => {
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
    const { data } = await axios.post(`/api/gptapi?keyword=${encodeURIComponent(keyword)}`);
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

export const getStudyMateirals = async () => {
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

export const requestScanDevice = async (artist: string, title: string) => {
  const { data } = await axiosClient.post(`/letter/by-scan/${artist}`, { title });
  return data;
};

export const getSingleMateiral = async (id: string) => {
  const { data } = await axiosClient.get(`/study/${id}`);
  return data;
};

export const postEpsonPrint = async (url: string) => {
  const { data } = await axiosClient.post(`/epson/print`, { targetUrl: imageBaseURL + url });
  return data;
};

export const putDeviceSetting = async () => {
  const { data } = await axiosClient.put(`/user/epsondevice?device=mdy4265n8m7195@print.epsonconnect.com`);

  return data;
};

export const sendLetterUpload = async (
  file: File | Blob,
  pageTypes: ("text" | "picture")[],
  title: string,
  artist: string
) => {
  if (!file) return;

  const formData = new FormData();
  formData.append("title", title);
  formData.append("pageTypes", JSON.stringify(pageTypes));
  formData.append("files", file);

  const { data } = await axiosClient.post(`/letter/${artist}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
