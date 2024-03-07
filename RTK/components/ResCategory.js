import ItemList from "./ItemList";

const ResCategory = ({ data, show, setShowIndex }) => {
  const Click = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg  p-4">
      <div className="flex justify-between cursor-pointer" onClick={Click}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {show && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default ResCategory;
