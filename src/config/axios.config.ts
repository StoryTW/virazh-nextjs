// import { getToken } from '@/utils/token';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface IBasicResponse<T> {
  data: T;
}

//Использовать для серверных запросов
export const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
  timeout: 25000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const responseBody = <T>(response: AxiosResponse<IBasicResponse<T>>) => response.data.data;

//Использовать для клиентских запросов с помощью tanstack-query
export const api = {
  get: <T, TParams = undefined | any>(url: string, queryParams?: TParams) =>
    axiosConfig.get<IBasicResponse<T>>(url, { params: queryParams }).then(responseBody),
  post: <T>(url: string, body?: Record<string, any>) =>
    axiosConfig.post<IBasicResponse<T>>(url, body).then(responseBody),
  put: <T>(url: string, body?: Record<string, any>) =>
    axiosConfig.put<IBasicResponse<T>>(url, body).then(responseBody),
  delete: <T>(url: string) => axiosConfig.delete<IBasicResponse<T>>(url).then(responseBody),
};

axiosConfig.interceptors.request.use(
  (config) => {
    // const token = getToken();

    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosConfig.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(
      new AxiosError(
        error?.response?.data?.message,
        error?.response?.status,
        error?.config,
        error?.request,
        error?.response,
      ),
    );
  },
);
