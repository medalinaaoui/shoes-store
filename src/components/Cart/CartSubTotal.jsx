const CartSubTotal = ({ items }) => {
  const total = items.reduce((accumulator, currentItem) => {
    return accumulator + +currentItem.price * +currentItem.itemQuantity;
  }, 0);

  return (
    <div className=" py-2 mt-auto bg-white z-50 text-green-800 h-fit sticky bottom-0 left-0 right-0 flex flex-col justify-between px-3">
      <div className="flex justify-between">
        <h1 className=" font-semibold text-base">Subtotal</h1>
        <h2 className="bg-green-800 text-white rounded-sm py-1 px-2 text-sm mt-1 font-semibold ">
          ${total}
        </h2>
      </div>
      <div>
        <p className="text-sm font-semibold text-center mb-1">
          Taxes and Shipping Will Calculate At Shipping
        </p>
      </div>
      <div className="px-4">
        <button className=" w-full bg-green-800 text-white py-2 rounded-sm font-semibold">
          Check Out
        </button>
      </div>
    </div>
  );
};
export default CartSubTotal;
