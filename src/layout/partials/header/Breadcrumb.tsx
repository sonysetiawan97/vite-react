import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { breadcrumbsStore } from "@stores/BreadcrumbStore";

export const Breadcrumbs = () => {
  const breadcrumbs = useStore(breadcrumbsStore);

  if (!breadcrumbs.length) return null;

  return (
    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
      {breadcrumbs.map((item, index) => (
        <li key={item.path} className="breadcrumb-item text-muted">
          {index < breadcrumbs.length - 1 ? (
            <Link to={item.path} className="text-muted text-hover-primary">
              {item.label}
            </Link>
          ) : (
            <span className="text-dark fw-bold">{item.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
