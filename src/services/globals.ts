
import request, { urlTemplate } from '../utils/request';
import { API } from '../config';

/**
 * 请求测试接口
 * @param body 
 */
export function requestTest() {
  return request(API.test1)
}