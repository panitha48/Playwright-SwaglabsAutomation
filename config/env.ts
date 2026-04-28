export const ENV = process.env.ENV || 'qa';

const config = {
  qa: {
    baseURL: 'https://www.saucedemo.com/',
    usersFile: 'test-data/users.qa.json'
  },
  uat: {
    baseURL: 'https://www.saucedemo.com/',
    usersFile: 'test-data/users.uat.json'
  }
};

export default config[ENV as keyof typeof config];