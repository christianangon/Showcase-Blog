/*
 * @Description:
 * @Author: Ian
 * @Date: 2023-10-19 16:18:46
 * @LastEditTime: 2023-10-19 16:18:48
 * @LastEditors: Ian
 */
import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: "https://openexchangerates.org/api/", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 600000, // request timeout
});

export default service;
