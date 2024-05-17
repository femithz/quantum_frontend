const Item = ({ name, price }) => {
  return (
        <div  className="bg-white shadow-md rounded-lg p-4">
            <div className="text-center">
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-gray-500">{price}</p>
            </div>
      </div>
  );
};

export default Item;
