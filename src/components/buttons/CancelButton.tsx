import type { FC } from "react";
import { Link } from "react-router-dom";

interface CancelButtonProps {
  to: string;
  label: string;
}

const CancelButton: FC<CancelButtonProps> = ({ to, label }) => {
  return (
    <Link to={to} className="btn bg-dark-subtle">
      {label}
    </Link>
  );
};

export { CancelButton };
