const user = [
  {
    id: 1,
    name: 'evan',
    email: 'evan@gmail.com',
    token:
      '2lsaW5nLWJyb29rLTg4Mzg2Lmhlcm9rdWFwcC5jb21cL2FwaVwvbG9naW4iLCJpYXQiOjE2NDU3MTM1MDIsImV4cCI6MTY0NTcxNzEwMiwibmJmIjoxNjQ1NzEzNTAyLCJqdGkiOiJrUE5pblNQTTRpT1VvRW',
  },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const methods = {
  async post() {
    await sleep(10);
    return [200, user];
  },
};

export default methods;
