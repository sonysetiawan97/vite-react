import { DefaultBodyType, http, HttpResponse, Path } from 'msw';
import { LoginRequest } from '../../../../src/domains/auth/types/LoginRequest';
import { AuthResponse } from '../../../../src/domains/auth/types/AuthResponse';

const USERNAME = 'admin';
const PASSWORD = 'password';

export const login = http.post<
  Path,
  LoginRequest,
  AuthResponse | DefaultBodyType,
  '/auth/login'
>('/auth/login', async ({ request }) => {
  const { username, password } = await request.json();

  if (username === USERNAME && password === PASSWORD) {
    const response: AuthResponse = {
      accessToken: 'mock-token-123123',
      user: {
        email: 'admin@example.com',
        username: 'admin',
      },
    };

    return HttpResponse.json(response, { status: 200 });
  }

  return HttpResponse.json(
    {
      error: 'Invalid auth',
      message: 'Invalid username or password',
    },
    { status: 401 }
  );
});
