import axios from "axios";

//https://api.discogs.com/database/search?sort=title&format=&track=&barcode=&genre=&anv=&sort_order=asc&catno=&year=1981&contributor=&style=&credit=&country=&title=&label=&format_exact=12%22&submitter=&artist=&type=release&country_exact=US&key=${key}&secret=${secret}

const key = process.env.VUE_APP_KEY;
const secret = process.env.VUE_APP_SECRET;

export const search = async (query) => {
  return await axios.get(
    `https://api.discogs.com/database/search?q=${query}&key=${key}&secret=${secret}`
  );
};

export const releases = async (genre, year, style, country) => {
  //https://api.discogs.com/artists/1/releases
  return await axios.get(
    `https://api.discogs.com/database/search?sort=title&format=&track=&barcode=&genre=${genre}&anv=&sort_order=asc&catno=&year=${year}&contributor=&style=${style}&credit=&country=${country}&title=&label=&format_exact=12%22&submitter=&artist=&type=release&country_exact=US&key=${key}&secret=${secret}`
  );
};

export const releasesOne = async () => {
  return await axios.get(`https://api.discogs.com/releases/249504/rating`);
};
