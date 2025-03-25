import type { FC } from "react";

interface SubmitButtonProps {
  label: string;
  isLoading: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ label, isLoading = false }) => {
  return (
    <button type="submit" className="btn btn-dark" disabled={isLoading}>
      {label}
    </button>
  );
};

export { SubmitButton };
