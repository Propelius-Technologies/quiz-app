import axios, { AxiosRequestConfig } from "axios";
import merge from "lodash/merge";
import { getAccessToken } from "./token.utils";

const API_PREFIX = `/v1`;
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

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
  } catch (err: any) {
    console.log({err})
    console.log('geterror',err)
    if(err.code === "ERR_NETWORK") {
    const { message, statusCode, error, branding } = (err).message;
    // const { status } = (err as any).response;

    ////////
    // result.data = (err).message;
    result.error = {
      statusCode: statusCode || 500,
      message: message || String(error),
      branding,
    };
  } else {
    const { message, statusCode, error, branding } = (err).response.data;
    const { status } = (err).response;
    const errorMsg = err.response.data.error.errors?.length ? `${err.response.data.error.message} :  ${err.response.data.error.errors[0].message}` : `${err.response.data.error.message}`
    // result.data = errorMsg;
    result.error = {
      statusCode: statusCode || status,
      message: errorMsg || String(error),
      branding,
    };
  }
  }

  // console.log({result})

  return result;
};

export const fetchAction = async (config: AxiosRequestConfig) => {
  const token = getAccessToken();

  const specificConfig = {
    headers: { Authorization: `Bearer ${token}` || "" },
  };
  const axconfig = merge({}, { ...config, ...specificConfig });

  const res = await fetch(axconfig);

  console.log('response',res)
  const { data, error } = res;

  // TODO remove this
  const result: any = { data, error };


  if (error) {
    return error
  }

  return data;
};

export default AxiosInstance;
