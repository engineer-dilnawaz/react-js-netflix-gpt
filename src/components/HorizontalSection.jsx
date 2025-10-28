import HorizontalList from "./HorizontalList";

const HorizontalSection = ({ title, list }) => {
  return (
    <div className="w-screen pl-10 bg-black flex flex-col gap-3 mt-2.5">
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex gap-2 overflow-x-auto  scrollbar-hide">
        {list?.map((item) => (
          <HorizontalList key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalSection;
