import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: token,
  },
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err && err.response) {
      const status = err.response.status;
      if (status === 401) {
        console.log("Please login again!");
        router.push("/login");
      }
    }
    return Promise.reject(err);
  }
);

export default instance;
