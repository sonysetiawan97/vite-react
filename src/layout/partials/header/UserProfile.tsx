import { useAuth } from "@hooks/useAuth";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const UserProfile: FC = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();

  return (
    <div className="dropdown ms-3">
      <button
        className="btn btn-light border-0 shadow-none dropdown-toggle d-flex align-items-center gap-1"
        type="button"
        id="dropdownUserButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="26px"
          viewBox="0 -960 960 960"
          width="26px"
          fill="#1f1f1f"
        >
          <title>user</title>
          <path d="M237-285q54-38 115.5-56.5T480-360q66 0 127.5 18.5T723-285q35-41 52-91t17-104q0-129.67-91.23-220.84-91.23-91.16-221-91.16Q350-792 259-700.84 168-609.67 168-480q0 54 17 104t52 91Zm243-123q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm.28 312Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q52 0 100-16.5t90-48.5q-43-27-91-41t-99-14q-51 0-99.5 13.5T290-233q42 32 90 48.5T480-168Zm0-312q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm0-72Zm0 319Z" />
        </svg>
        <span className="text-muted">
          {t("header.navbar.user_profile.greeting")}
          {user?.username || ""}
        </span>
      </button>

      <ul className="dropdown-menu" aria-labelledby="dropdownUserButton">
        <li>
          <Link to={{ pathname: "/profile" }}>
            {t("header.navbar.user_profile.profile")}
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item text-danger bg-transparent border-0"
            onClick={logout}
          >
            {t("header.navbar.user_profile.logout")}
          </button>
        </li>
      </ul>
    </div>
  );
};
