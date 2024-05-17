import Item from './item/item';

function Items({ items }) {
  return (
        <>
                 <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-8">
                        <h1 className="text-3xl font-bold text-center mb-8">Trending ITEMs</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {items.map(item => (
                            <Item key={item.itemId} name={item.name}  price={item.price} />
                            ))}
                        </div>
                    </div>
        </>
  )
}

export default Items