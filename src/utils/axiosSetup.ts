import type {
  Axios,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const { VITE_API_AUTH_URL, VITE_API_BASE_URL, VITE_API_TIMEOUT } = import.meta
  .env;

  // TODO: need handling error to throw exactly page error
const axiosSetup = (axios: Axios) => {
  axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      config.baseURL = VITE_API_BASE_URL;

      if (config.url?.includes("auth")) {
        config.baseURL = VITE_API_AUTH_URL;
      }

      config.timeout = VITE_API_TIMEOUT || 10;
      config.headers["Content-Type"] = "application/json";

      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      console.error("Request error :: ", error.response, " | ", error.message);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      console.error(
        "Response error ::",
        error.status,
        error.code,
        "|",
        error.message
      );
      return Promise.reject(error);
    }
  );
};

export { axiosSetup };
