import { useState } from "react";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";

const Input = ({
  type = "text",
  placeholder = "",
  className,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div
        className={
          "bg-gray-200 mt-2 py-3 px-4 text-black rounded-sm text-lg flex items-center " +
          className
        }
      >
        <input
          placeholder={placeholder}
          type={showPassword ? "text" : type}
          className={"outline-0 flex-1"}
          {...props}
          required={false}
        />
        {type === "password" && (
          <div
            onClick={() => setShowPassword((prev) => !prev)}
            className="cursor-pointer"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaEye />}
          </div>
        )}
      </div>
      {error?.message && (
        <p className="text-red-400 font-medium text-shadow-md select-none mt-1 ml-2">
          {error?.message}
        </p>
      )}
    </>
  );
};

export default Input;
