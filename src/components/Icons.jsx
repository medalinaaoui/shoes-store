const Icons = ({ icon }) => {
  return (
    <div className="sm:h-8 h-6 aspect-square hover:-translate-y-1 transition-transform duration-500 cursor-pointer">
      <img src={icon} alt="social media icon" />
    </div>
  );
};
export default Icons;
