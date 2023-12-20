import axiosClient from "./axiosClient.js";

const getApiMap = async () => {
  const res = await axiosClient.get("https://6mgzq6-8080.csb.app/mindmap");
  return { data: res };
};

const postApiMap = async (body) => {
  const res = await axiosClient.post("https://6mgzq6-8080.csb.app/mindmap", body);
  return { data: res };
};
export { getApiMap, postApiMap };
