import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID bZNKgCzzd3utU25w12VrvJFohHA-6TkQPsCfrGYY-F8",
  },
});
