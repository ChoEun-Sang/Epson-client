import axiosClient from "./axiosClient";

export const getLetterDetail = async (letterId: string) => {
  const { data } = await axiosClient.get(`/letter/${letterId}`);
  return data;
};

export const postKeywords = async (keywords: string[]) => {
  const { data } = await axiosClient.post("keywords", keywords);
  return data;
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
  const { data } = await axiosClient.get("api/letter/received");
  return data;
};

export const getRecivedMails = async () => {
  const { data } = await axiosClient.get("/letter/received");
  return data;
};
