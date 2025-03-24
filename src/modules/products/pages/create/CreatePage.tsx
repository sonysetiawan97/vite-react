import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CreatePage: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <form className="row g-3">
        <h6 className="d-flex align-items-center gap-2">
          <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
            <title>Icon Menu</title>
            <path d="M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z" />
          </svg>
          Create Product
        </h6>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-md-12">
          <label htmlFor="formFile" className="form-label">
            Default file input example
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex gap-2">
            <Link
              to={"/products"}
              className="btn bg-dark-subtle d-inline-flex align-items-center gap-1"
            >
              <svg
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1f1f1f"
              >
                <path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z" />
                <title>{t("button.cancel")}</title>
              </svg>
              <span>{t("button.cancel")}</span>
            </Link>
            <Link
              to={"/products"}
              className="btn btn-dark d-inline-flex align-items-center gap-1"
            >
              <svg
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M140-190v-580l688.46 290L140-190Zm60-90 474-200-474-200v147.69L416.92-480 200-427.69V-280Zm0 0v-400 400Z" />
                <title>{t("button.submit")}</title>
              </svg>
              <span>{t("button.submit")}</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
export { CreatePage };
