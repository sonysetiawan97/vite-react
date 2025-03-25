import { useFormContext } from "react-hook-form";
import type { FC, InputHTMLAttributes } from "react";

interface TextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Text: FC<TextProps> = ({ name, label, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <input
        {...register(name)}
        id={name}
        className={`form-control ${errors[name] ? "is-invalid" : ""}`}
        {...rest}
      />
      {errors[name] && (
        <div className="invalid-feedback">
          {errors[name]?.message as string}
        </div>
      )}
    </div>
  );
};

export { Text };
