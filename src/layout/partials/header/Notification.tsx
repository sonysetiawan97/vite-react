import type { FC } from "react";
import { Link } from "react-router-dom";

export const Notification: FC = () => {
  return (
    <div className="dropdown me-2">
      <button
        className="btn btn-light border-0 shadow-none dropdown-toggle d-flex align-items-center gap-1"
        type="button"
        id="dropdownUserButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#1f1f1f"
          className="text-dark dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <title>notification</title>
          <path d="M96-96v-696q0-29 21.15-50.5T168-864h387q-3 18-3 36t3 36H168v522l42-42h582v-330q18-5 37.5-15t34.5-21v366q0 29.7-21.5 50.85Q821-240 792-240H240L96-96Zm72-696v480-480Zm576 84q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
        </svg>
      </button>

      <ul className="dropdown-menu">
        <li>
          <Link to={{ pathname: "/" }}>list 1</Link>
        </li>
        <li>
          <Link to={{ pathname: "/" }}>list 2</Link>
        </li>
        <li>
          <Link to={{ pathname: "/" }}>list 3</Link>
        </li>
      </ul>
    </div>
  );
};
