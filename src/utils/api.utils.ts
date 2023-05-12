import axios, { AxiosRequestConfig } from 'axios';
import merge from 'lodash/merge';
import { getAccessToken } from './token.utils';


const API_PREFIX = `/api`;
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_HOST;

export const AxiosInstance = axios.create({
    baseURL: API_BASE_URL + API_PREFIX,
});

export const fetch = async (config: AxiosRequestConfig) => {
    // TODO remove this
    const result: any = {
        data: null,
        error: null,
    };

    try {
        const response = await AxiosInstance(config);
        result.data = response.data;
    } catch (err) {
        const { message, statusCode, error, branding } = (err as any).response.data;
        const { status } = (err as any).response;

        result.error = {
            statusCode: statusCode || status,
            message: message || String(error),
            branding,
        };
    }

    return result;
};

export const fetchAction = async (config: AxiosRequestConfig) => {
    const token = getAccessToken();

    const specificConfig = {
        headers: { Authorization: `Bearer ${token}` || '' },
    };
    const axconfig = merge({}, config, specificConfig);
    const res = await fetch(axconfig);
    const { data, error } = res;

    // TODO remove this
    const result: any = { data, error };

    if (error) {
    }

    return result;
};

export default AxiosInstance;
