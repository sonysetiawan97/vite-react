import type { FC } from "react";
import { Link } from "react-router-dom";
import Logo from '../../../assets/images/logo-blue.png';

const Sidebar: FC = () => {
    return (
      <div className="app-sidebar d-flex flex-column">

        <div className="app-sidebar-logo px-3 mb-2"><img alt="Logo" src={Logo} width={80}/></div>
        {/* <!-- Sidebar --> */}
        <div className="list-group list-group-flush">
          <span className="menu-content text-muted mb-0 fs-7 text-uppercase px-4 mb-2 mt-4" aria-current="true">
            Master
          </span>
          <Link to={"/dashboard"} className="list-group-item list-group-item-action border-0 px-4">
            <span>Dashboard</span>
          </Link>
          <Link to={"/products"} className="list-group-item list-group-item-action border-0 px-4">
            <span>Products</span>
          </Link>
          <Link to={"/examples"} className="list-group-item list-group-item-action border-0 px-4">
            <span>Examples</span>
          </Link>

          <span className="menu-content text-muted mb-0 fs-7 text-uppercase px-4 mb-2 mt-4" aria-current="true">
            Base
          </span>
          <Link to={"/"} className="list-group-item list-group-item-action border-0 px-4">
            <span>Setting</span>
          </Link>
          <Link to={"/"} className="list-group-item list-group-item-action border-0 px-4">
            <span>Theme</span>
          </Link>
          {/* <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <span className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Accordion Item #1
                </span>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
          </div> */}


        </div>

      </div>
    );
};

export default Sidebar;
