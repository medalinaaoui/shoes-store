import { FaPlay } from "react-icons/fa";

const Clips = ({ videoCover, video }) => {
  return (
    <div className="videos-container relative flex items-center justify-center rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 lg:h-24 sm:w-20 sm:16 w-16 h-14">
      <img
        src={videoCover}
        alt="videoCover"
        className="inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 transition-opacity duration-500 z-10"
      />
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 opacity-0 group-hover:z-50 rounded-xl group-hover:opacity-100 z-0"
      >
        <source type="video/mp4" src={video}></source>
      </video>
      <FaPlay className="  absolute  text-white w-8 aspect-square z-100 opacity-100" />
    </div>
  );
};
export default Clips;
