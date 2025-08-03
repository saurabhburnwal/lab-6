import RestaurantCard from './RestaurantCard';

function RestaurantOverview({ restaurants }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Restaurant Overview
            </h2>
            <div className="grid grid-cols-3 gap-4">
                {restaurants.slice(0, 5).map(restaurant => (
                    <RestaurantCard 
                        key={restaurant.id} 
                        restaurant={restaurant} 
                    />
                ))}
            </div>
        </div>
    );
}

export default RestaurantOverview;
