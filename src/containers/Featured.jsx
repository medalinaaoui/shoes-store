const Featured = ({ highlight, heading, title, text, btn, url, img }) => {
  return (
    <section
      className={` gap-6 w-screen flex md:justify-between  items-center md:items-start py-6 px-12 ${
        highlight ? " md:flex-row-reverse flex-col" : "md:flex-row flex-col"
      }`}
    >
      <div className="grid md:items-start items-center md:w-2/5 w-full">
        <h1 className="font-bold md:text-4xl text-2xl text-four">{heading}</h1>
        <h2 className="font-extrabold md:text-5xl text-2xl text-two">
          {title}
        </h2>
        <div className="flex gap-4 flex-col mt-4">
          <p className="md:text-base text-sm">{text}</p>
          <button
            className="md:text-base font-semibold
         text-sm button-theme w-fit hover:bg-two hover:text-three"
          >
            {btn}
          </button>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-[18rem] sm:h-1/3 w-4/5 sm:relative static">
        <img
          src={img}
          alt="Featured image"
          className={` transitions-theme hover:scale-110 hover:rotate-0 -rotate-12 w-full md:absolute static`}
        />
      </div>
    </section>
  );
};
export default Featured;
