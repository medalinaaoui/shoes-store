import { FaHeart, FaClock } from "react-icons/fa";
import { truncate } from "lodash";

const Story = ({ story }) => {
  return (
    <article className=" rounded-lg shadow-xl flex flex-col gap-2 justify-center items-center">
      <div>
        <img
          src={story.img}
          alt="Story Image"
          className=" rounded-t-lg object-cover"
        />
      </div>
      <div className="font-semibold text-xs sm:text-sm lg:text-base flex gap-3 ">
        <p className="flex flex-row items-center gap-1">
          <span className="text-red-600">
            <FaHeart />
          </span>
          {story.like}
        </p>
        <p className="flex flex-row items-center gap-1">
          <span className="text-blue-500">
            <FaClock />
          </span>{" "}
          {story.time}
        </p>
        <p className="flex flex-row items-center gap-1 text-blue-500">
          #{story.by}
        </p>
      </div>

      <div className="px-6 text-xs sm:text-sm lg:text-base space-y-1">
        <h2 className="font-bold ">{story.title}</h2>
        <p className="">{truncate(story?.text, { length: 175 })}</p>
      </div>
      <div className="px-6 object-center w-full pb-4">
        <a href={story.url} target="_blank">
          <button className="py-1 px-5 bg-one hover:bg-two text-three text-center text-xs sm:text-sm lg:text-base w-full rounded-md">
            {story.btn}
          </button>
        </a>
      </div>
    </article>
  );
};
export default Story;
