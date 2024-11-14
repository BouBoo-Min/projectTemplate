// import type { RequestConfig } from 'umi';

/**
 * @see https://umijs.org/docs/api/runtime-config#getinitialstate
 * */
export async function getInitialState(): Promise<{}> {
  return {}
}

/**
 * @see https://umijs.org/docs/max/request
 */
export const request: any = {
  timeout: 1000,
  baseURL: process.env.NODE_ENV === 'development' ? '/dev' : '',
  errorConfig: {
    errorHandler() { },
    errorThrower() { }
  },
  requestInterceptors: [
    () => { }
  ],
  responseInterceptors: [
    () => { }
  ]
}