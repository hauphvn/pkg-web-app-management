import axios, {AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {STORAGE_ITEM} from "../constants/StorageItem.ts";
const apiUrl = import.meta.env.VITE_API_URL;
// const debug = import.meta.env.VITE_DEBUG;
const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);
// Create an axios instance
const api: AxiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
});

// Add interceptor to handle request
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem(STORAGE_ITEM.TOKEN) || sessionStorage.getItem(STORAGE_ITEM.TOKEN);
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 || !originalRequest._retry) {
            originalRequest._retry = true;
            const isLocalStorage = !!localStorage.getItem(STORAGE_ITEM.REFRESH_TOKEN);
            const refreshToken = localStorage.getItem(STORAGE_ITEM.REFRESH_TOKEN) || sessionStorage.getItem(STORAGE_ITEM.REFRESH_TOKEN);
            const accessToken = localStorage.getItem(STORAGE_ITEM.TOKEN) || sessionStorage.getItem(STORAGE_ITEM.TOKEN);
            if (refreshToken) {
                const response = await axios.post(`${apiUrl}/auth/refresh-token`, {
                    accessToken: accessToken,
                    refreshToken: refreshToken
                });
                if (response.status === 200) {
                    if (isLocalStorage) {
                        localStorage.setItem(STORAGE_ITEM.TOKEN, response.data.accessToken);
                    } else {
                        sessionStorage.setItem(STORAGE_ITEM.TOKEN, response.data.accessToken);
                    }
                    api.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
                    return api(originalRequest);
                }
            } else {
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);
// Add methods to axios instance
export const get = async (url: string, config?: InternalAxiosRequestConfig) => {
    return api.get(url, config);
}
export const post = async(url: string, data: unknown, config?: InternalAxiosRequestConfig) => {
    return api.post(url, data as Record<string, unknown>, config)
}
export const put = async(url: string, data: unknown, config?:InternalAxiosRequestConfig) => {
    return api.put(url, data as Record<string, unknown>, config);
}
export const del = async(url:string, config?: InternalAxiosRequestConfig) => {
    return api.delete(url, config)
}
export default api;