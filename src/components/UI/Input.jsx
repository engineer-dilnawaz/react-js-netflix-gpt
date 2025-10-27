const Input = ({ type = "text", placeholder = "", className, ...props }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={
        "bg-gray-200 my-2 py-3 px-4 outline-0 text-black rounded-sm text-lg" +
        className
      }
      {...props}
    />
  );
};

export default Input;
