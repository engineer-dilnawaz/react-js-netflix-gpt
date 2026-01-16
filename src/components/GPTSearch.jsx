import { IoIosArrowRoundBack, IoIosSearch } from "react-icons/io";

import { Link, useNavigate } from "react-router";
import { client } from "../utils/openai";
import { useRef } from "react";
import { ShowToast, TOAST_TYPE } from "../utils/toast";

const GPTSearch = () => {
  const navigate = useNavigate();
  const searchBarRef = useRef();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleOnSearchClick = async () => {
    const userSearchQuery = searchBarRef.current.value;
    if (!userSearchQuery) {
      ShowToast(
        "Please enter your query to search your favourite movies",
        TOAST_TYPE.INFO,
        {
          position: "top-left",
        }
      );
      return;
    }

    const gptQuery = `Act as a movie recomendation expert and suggest me top 5 movies matching query: The query is ${userSearchQuery}. Compose your response in array of string like example ahead, [Movie1, Movie2, Movie3, Movie4]`;
    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    console.log(completion);
  };

  return (
    <div className="h-screen flex flex-col  bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/PK-en-20251020-TRIFECTA-perspective_38affad5-942d-4214-9a8d-e193c7261c53_large.jpg')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/55">
      <div className="h-16 bg-transparent shadow sticky top-0 backdrop-blur-sm z-40 flex items-center">
        <button
          className="flex items-center gap-0.5 cursor-pointer text-white "
          onClick={handleGoBack}
        >
          <IoIosArrowRoundBack className="w-12 h-12 " />
          <p className="font-semibold text-lg">Go Back</p>
        </button>

        <div className="flex-1 text-center text-white text-lg font-bold mr-20 capitalize">
          Find your favourite movies smartly
        </div>
      </div>

      <div className="bg-black flex items-center w-6/12 mt-3 self-center text-white p-2 z-30 rounded-sm">
        <form className="flex flex-1 gap-2" onClick={(e) => e.preventDefault()}>
          <input
            ref={searchBarRef}
            placeholder="What do you want to watch today?"
            className="text-black flex-1 bg-white rounded px-2 placeholder:text-gray-400 outline-none"
          />
          <button
            className="bg-red-500 font-semibold text-lg text-white px-4 py-2 rounded outline-none flex items-center gap-1 cursor-pointer"
            onClick={handleOnSearchClick}
          >
            <p className="font-semibold text-lg">Search</p>
            <IoIosSearch className="h-6 w-6 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearch;
