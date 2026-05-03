export const BASE_URLS = {
  qa: 'https://www.saucedemo.com/',
  uat: 'https://uat.saucedemo.com/'
} as const;
export const ENV = (process.env.TEST_ENV || 'qa') as keyof typeof BASE_URLS;