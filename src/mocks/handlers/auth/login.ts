import { type DefaultBodyType, http, HttpResponse, type Path } from "msw";
import type { LoginRequest } from "@modules/auth/types/LoginRequest";
import type { AuthResponse } from "@modules/auth/types/AuthResponse";

const USERNAME = "admin";
const PASSWORD = "password";

export const login = http.post<
  Path,
  LoginRequest,
  DefaultBodyType,
  "/auth/login"
>("/auth/login", async ({ request }) => {
  const { username, password } = await request.json();

  if (username === USERNAME && password === PASSWORD) {
    const response: AuthResponse = {
      accessToken: "mock-token-123123",
      user: {
        email: "admin@example.com",
        username: "admin",
      },
    };

    return HttpResponse.json(response, { status: 200 });
  }

  return HttpResponse.json(
    {
      error: "Invalid auth",
      message: "Invalid username or password",
    },
    { status: 401 }
  );
});
