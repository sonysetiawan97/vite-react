import type { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div className="d-flex align-items-center">
      <div className="dropdown me-2">
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

      <div className="dropdown ms-3">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-dark dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false"><path fill="currentColor" d="M12 13c2.396 0 4.575.694 6.178 1.671.8.49 1.484 1.065 1.978 1.69.486.616.844 1.352.844 2.139 0 .845-.411 1.511-1.003 1.986-.56.45-1.299.748-2.084.956-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139.494-.625 1.177-1.2 1.978-1.69C7.425 13.694 9.605 13 12 13Z" className="duoicon-primary-layer"></path><path fill="currentColor" d="M12 2c3.849 0 6.255 4.167 4.33 7.5A5 5 0 0 1 12 12c-3.849 0-6.255-4.167-4.33-7.5A5 5 0 0 1 12 2Z" className="duoicon-secondary-layer" opacity=".3"></path></svg> */}
        <div className="d-flex gap-1 align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="26px"
            viewBox="0 -960 960 960"
            width="26px"
            fill="#1f1f1f"
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <title>user</title>
            <path d="M237-285q54-38 115.5-56.5T480-360q66 0 127.5 18.5T723-285q35-41 52-91t17-104q0-129.67-91.23-220.84-91.23-91.16-221-91.16Q350-792 259-700.84 168-609.67 168-480q0 54 17 104t52 91Zm243-123q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm.28 312Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q52 0 100-16.5t90-48.5q-43-27-91-41t-99-14q-51 0-99.5 13.5T290-233q42 32 90 48.5T480-168Zm0-312q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm0-72Zm0 319Z" />
          </svg>
          <span className="text-muted">Hi, adoel</span>
        </div>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/">
              Profil
            </a>
          </li>
          <li>
            <a className="dropdown-item text-danger" href="/">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
