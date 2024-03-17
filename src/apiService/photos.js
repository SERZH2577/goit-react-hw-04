import axios from "axios";

const API_KEY = "SUUEpg8eGmgRBtWQNK-mXIeBGJQlQS2J2m8NPoAUcJM";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
  client_id: API_KEY,
  orientation: "landscape",
  per_page: 20,
};

export default async function getImages(query, page) {
  const {
    data: { results },
  } = await axios.get("/search/photos", {
    params: {
      query: query,
      page: page,
    },
  });

  return results;
}
