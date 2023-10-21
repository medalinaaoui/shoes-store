const FooterSections = ({ title, links }) => {
  return (
    <div className=" space-y-1 mt-3 text-one">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="footer-links">
        {links?.map((link, i) => (
          <li key={i} className="text-xs sm:text-sm font-semibold">
            {link.link}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterSections;
