import {
  Axios,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const { VITE_API_BASE_URL, VITE_API_TIMEOUT } = import.meta.env;

const axiosSetup = (axios: Axios) => {
  axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      config.baseURL = VITE_API_BASE_URL || 'localhost:8000';
      config.timeout = VITE_API_TIMEOUT || 30;
      config.headers['Content-Type'] = 'application/json';

      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      console.error('Request error :: ', error.response, ' | ', error.message);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      console.error(
        'Response error ::',
        error.status,
        error.code,
        '|',
        error.message
      );
      return Promise.reject(error);
    }
  );
};

export { axiosSetup };
