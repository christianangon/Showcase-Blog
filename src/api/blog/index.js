/*
 * @Description:
 * @Author: Ian
 * @Date: 2023-10-19 16:19:46
 * @LastEditTime: 2023-10-19 16:20:08
 * @LastEditors: Ian
 */
import request from "../request";

export function getBlog(params) {
  return request({
    url: "https://demo.uats.site/api/uat-articles",
    method: "get",
    params,
  });
}
