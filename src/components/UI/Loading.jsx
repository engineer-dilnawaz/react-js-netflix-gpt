import { Rings } from "react-loader-spinner";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col min-h-full h-dvh bg-slate-200 justify-center items-center">
      <Rings
        visible={true}
        height="80"
        width="80"
        color={"red"}
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p className="text-red-400 font-semibold mt-1 text-lg">{text}</p>
    </div>
  );
};

export default Loading;
