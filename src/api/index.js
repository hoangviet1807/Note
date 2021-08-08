import axios from "axios";
export const fetchNote = async () => {
  return axios.get("http://localhost:8000/notes").then((res) => res.data);
};

export const insertPost = async () => {
  return axios.post("http://localhost:8000/notes");
};

export const baseURL = "http://localhost:8000/notes/";

export const removeBook = async (id) => {
  const response = await fetch(
    baseURL + id,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};
