import axiosClient from "./axiosClient";

export const getLetterDetail = async (letterId: string) => {
  const { data } = await axiosClient.get(`/letter/${letterId}`);
  return data;
};

export const postKeywords = async (keywords: string[]) => {
  const { data } = await axiosClient.post("keywords", keywords);
  return data;
};
