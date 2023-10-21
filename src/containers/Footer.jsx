import { FooterSections } from "../components/index";

const Footer = ({ footer }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" relative h-auto w-auto flex flex-col py-6 px-12 space-y-6 bg-theme">
      <div className=" grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-20 justify-center z-50 mx-auto">
        {footer?.map((section, i) => (
          <FooterSections {...section} key={i} />
        ))}
      </div>
      <div className="rights font-semibold mt-3 text-center">
        <p className="text-sm md:text-center">
          Copyright<sup className="text-base font-bold">©</sup> All Reserved
          Rights{" "}
          <span className="font-bold">Mohamed Ali Naaoui {currentYear}</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
