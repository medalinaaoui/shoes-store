import { Prodect } from "../components/index";

const Sales = ({ ifExits, endpoint: { title, items } }) => {
  return (
    <section className=" py-6 px-12 space-y-6 ">
      <h1 className="  text-one md:text-6xl text-xl font-bold">{title}</h1>
      <div
        className={`grid gap-6 ${
          ifExits
            ? " grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-2"
        }`}
      >
        {items?.map((item) => (
          <Prodect key={item.id} {...item} ifExits={ifExits} />
        ))}
      </div>
    </section>
  );
};
export default Sales;
