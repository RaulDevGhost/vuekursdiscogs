import axios from "axios";

const key = process.env.VUE_APP_KEY;
const host = process.env.VUE_APP_HOST;

const search = async (query, option) => {
  console.log(option);
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: query,
      type: option,
      offset: "0",
      limit: "10",
      numberOfTopResults: "5",
    },
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const apiServiceSpotify = {
  search,
};

export default apiServiceSpotify;

// export const search = async (query) => {
//   return await axios.get(
//     `https://api.discogs.com/database/search?q=${query}&key=${key}&secret=${secret}`
//   );
// };

// export const releases = async (genre, year, style, country) => {
//   //https://api.discogs.com/artists/1/releases
//   return await axios.get(
//     `https://api.discogs.com/database/search?sort=title&format=&track=&barcode=&genre=${genre}&anv=&sort_order=asc&catno=&year=${year}&contributor=&style=${style}&credit=&country=${country}&title=&label=&format_exact=12%22&submitter=&artist=&type=release&country_exact=US&key=${key}&secret=${secret}`
//   );
// };

// export const releasesOne = async () => {
//   return await axios.get(`https://api.discogs.com/releases/249504/rating`);
// };
