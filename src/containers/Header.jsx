import { Clips, Icons, Navbar } from "../components/index";

const Header = ({
  headerState: {
    title,
    subtitle,
    logo,
    frontPic,
    btntext,
    videos,
    sociallinks,
  },
}) => {
  return (
    <header className="relative h-auto w-auto flex flex-col">
      <div className="bg-theme clip-path z-10 h-[85vh]  w-auto absolute top-0 left-0 right-0 opacity-100"></div>
      <Navbar logo={logo} />
      <div className="relative -mt-24 z-20 opacity-100 grid justify-center justify-items-center adidas-container ">
        <div className="grid justify-center justify-items-center mt-28 md:mt-24">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold filter drop-shadow-md text-three text-center">
            {title}
          </h1>
          <h2 className="text-xl sm:text-1xl md:text-2xl lg:text-3xl font-extrabold filter drop-shadow-md text-three text-center">
            {subtitle}
          </h2>
          <button
            type="button"
            className=" mt-8 md:text-base font-semibold
         text-sm button-theme w-fit hover:bg-two hover:text-three"
          >
            {btntext}
          </button>
          <div className="grid items-center md:gap-5 gap-3 w-auto h-auto absolute top-[18rem] left-0">
            {videos?.map((item, index) => (
              <a
                href={item.externalUrl}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Clips videoCover={item.imgsrc} video={item.clip} />
              </a>
            ))}
          </div>
          <div className="grid items-center md:gap-5 gap-3 w-auto h-auto absolute top-[19rem] sm:top-[17rem] lg:top-[20rem] right-0">
            {sociallinks?.map((icon, index) => (
              <a
                href={icon.link}
                key={index}
                target="_blank"
                rel="social media"
              >
                <Icons icon={icon.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className=" overflow-hidden">
          <img
            src={frontPic}
            alt={title}
            className=" sm:-mt-8 w-auto h-[50vw] sm:h-[40vw] transitions-theme hover:scale-75 hover:rotate-12 cursor-pointer object-fill "
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
