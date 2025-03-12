import type { FC } from "react";

const Navbar: FC = () => {
    return (
      <div className="d-flex align-items-center">
        <div className="dropdown me-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-darkdropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" ><path fill="currentColor" d="M18.5 9c.338 0 .664-.048.973-.137.018.211.027.425.027.64v4l1.418 3.16A.95.95 0 0 1 20.052 18h-16.1a.95.95 0 0 1-.867-1.338l1.415-3.16V9.49l.005-.25c.201-5.749 6.533-9.14 11.43-6.123-1.834 1.973-.845 5.193 1.781 5.795A3.5 3.5 0 0 0 18.5 9Z" className="duoicon-secondary-layer" opacity=".3"></path><path fill="currentColor" d="M18.5 8c1.925 0 3.127-2.083 2.165-3.75A2.5 2.5 0 0 0 18.5 3c-1.925 0-3.127 2.083-2.165 3.75A2.5 2.5 0 0 0 18.5 8Zm-3.542 11.003c-.385 2.277-3.09 3.283-4.87 1.811a3 3 0 0 1-1.046-1.811h5.916Z" className="duoicon-primary-layer"></path></svg>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>

        <div className="dropdown ms-3 bg-white rounded-pill p-1 shadow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-darkdropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false"><path fill="currentColor" d="M12 13c2.396 0 4.575.694 6.178 1.671.8.49 1.484 1.065 1.978 1.69.486.616.844 1.352.844 2.139 0 .845-.411 1.511-1.003 1.986-.56.45-1.299.748-2.084.956-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139.494-.625 1.177-1.2 1.978-1.69C7.425 13.694 9.605 13 12 13Z" className="duoicon-primary-layer"></path><path fill="currentColor" d="M12 2c3.849 0 6.255 4.167 4.33 7.5A5 5 0 0 1 12 12c-3.849 0-6.255-4.167-4.33-7.5A5 5 0 0 1 12 2Z" className="duoicon-secondary-layer" opacity=".3"></path></svg>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Profil</a></li>
            <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;
