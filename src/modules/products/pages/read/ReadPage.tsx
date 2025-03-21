import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const ReadPage: FC = () => {
  const { t } = useTranslation();
  return <div className="PageRead">
    <form className="row g-4">
      <h6 className="d-flex align-items-center gap-2">
        <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-87.69q-69.69-61.47-156.92-95.35Q235.85-216.92 140-220v-406.92q96.39 2.69 184.19 40.15Q412-549.31 480-486.46q68-62.85 155.81-100.31 87.8-37.46 184.19-40.15V-220q-96.46 3.08-183.39 36.96Q549.69-149.16 480-87.69Zm0-77.08q63-46.61 134-74.78t146-37.22v-283.69q-75.69 13-146.58 51.54Q542.54-470.39 480-407.85q-62.54-62.54-133.42-101.07-70.89-38.54-146.58-51.54v283.69q75 9.05 146 37.22 71 28.17 134 74.78Zm0-443.69q-59.65 0-102.13-42.48t-42.48-102.14q0-59.65 42.48-102.13T480-897.69q59.65 0 102.13 42.48t42.48 102.13q0 59.66-42.48 102.14-42.48 42.48-102.13 42.48Zm.01-60q34.91 0 59.76-24.86t24.85-59.77q0-34.91-24.86-59.76-24.86-24.84-59.77-24.84-34.91 0-59.76 24.86t-24.85 59.77q0 34.91 24.86 59.75 24.86 24.85 59.77 24.85Zm-.01-84.62Zm0 345.23Z"/></svg>
        Read Product
      </h6>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control-plaintext" id="inputEmail4" value={"Adoel@gmail.com"} readOnly/>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Password</label>
        <input type="password" className="form-control-plaintext" id="inputPassword4" readOnly value={"Password"}/>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <input type="text" className="form-control-plaintext" id="inputAddress" value={"RT 02/06 Kec. Serpong Kota Tangerang Selatang Banten"} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
        <input type="text" className="form-control-plaintext" id="inputAddress2" placeholder="Apartment, studio, or floor" readOnly value={"Jalan Ranen Inten Raya Nomer 12"}/>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control-plaintext" id="inputCity" readOnly value={"Jakarta Timur"}/>
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">State</label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input type="text" className="form-control-plaintext" id="inputZip" readOnly value={"23ER4Z"}/>
      </div>
      <div className="col-md-12">
        <label htmlFor="formFile" className="form-label">Default file input example</label>
        <input className="form-control-plaintext" id="formFile" readOnly value={"-"}/>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck"/>
          <label className="form-check-label" htmlFor="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex gap-2 mt-2">
          <Link to={"/products"} className="btn bg-dark-subtle d-inline-flex align-items-center gap-1" >
            <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
              <path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"/>
              <title>{t("button.cancel")}</title>
            </svg>
              <span>{t("button.cancel")}</span>
          </Link>
          <Link
              to={"/products"}
              className="btn btn-dark d-inline-flex align-items-center gap-1"
            >

              <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                <path d="M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z"/>
                <title>{t("button.edit")}</title>
              </svg>
              <span>{t("button.edit")}</span>
            </Link>

        </div>
      </div>
    </form>
  </div>
};
