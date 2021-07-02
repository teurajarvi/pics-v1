import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID AIBkvJbDXqLRR6NY-3vMNqdOTbOqGKptgBcaZ78YLgM",
  },
});
