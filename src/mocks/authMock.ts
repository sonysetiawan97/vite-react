import MockAdapter from 'axios-mock-adapter';
import { LoginRequest } from '../domains/auth/types/LoginRequest';
import { AuthResponse } from '../domains/auth/types/AuthResponse';

const USERNAME = 'admin';
const PASSWORD = 'password';

export const authMock = (mock: MockAdapter) => {
  mock.onPost('/auth/login').reply((config) => {
    const request: LoginRequest = JSON.parse(config.data);
    const { username, password } = request;

    if (username === USERNAME && password === PASSWORD) {
      const response: AuthResponse = {
        accessToken: 'mock-token-123123',
        user: {
          email: 'admin@example.com',
          username: 'admin',
        },
      };
      return [200, response];
    }

    return [
      401,
      {
        message: 'Invalid username or password.',
      },
    ];
  });

  mock.onPost('/auth/logout').reply(200);
};
