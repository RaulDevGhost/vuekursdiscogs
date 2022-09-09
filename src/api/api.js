import axios from "axios";

const key = process.env.VUE_APP_KEY;
const secret = process.env.VUE_APP_SECRET;

export const search = async (query) => {
  return await axios.get(
    `https://api.discogs.com/database/search?q=${query}&key=${key}&secret=${secret}`
  );
};
