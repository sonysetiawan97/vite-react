import type React from "react";
import { useState } from "react";
import { login } from "../services/loginService";
import type { LoginRequest } from "../types/LoginRequest";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Login: React.FC = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const request: LoginRequest = { username, password };

    try {
      await login(request);
      navigate("/products");
    } catch (err) {
      setError("Invalid username or password");
      console.error("err:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column gap-2 align-items-center"
    >
      <h5 className="text-white">{t("login.form.title")}</h5>
      <input
        className="form-control bg-transparent text-white"
        type="text"
        placeholder={t("login.form.username")}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="form-control bg-transparent text-white"
        type="password"
        placeholder={t("login.form.password")}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="btn btn-light w-100">
        {t("login.form.button")}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};
