import { useFormContext } from "react-hook-form";
import { useState } from "react";
import type { FC, InputHTMLAttributes } from "react";

interface PasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Password: FC<PasswordProps> = ({ name, label, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <div className="input-group">
        <input
          {...register(name, {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          id={name}
          type={showPassword ? "text" : "password"}
          className={`form-control ${errors[name] ? "is-invalid" : ""}`}
          {...rest}
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {errors[name] && (
        <div className="invalid-feedback">
          {errors[name]?.message as string}
        </div>
      )}
    </div>
  );
};

export { Password };
