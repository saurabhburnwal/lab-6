
function RestaurantCard({ restaurant }) {
    return (
        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg text-gray-800">
                {restaurant.name}
            </h3>
            <p className="text-gray-600 text-sm mb-2">
                <span className="font-medium">Cuisine:</span> {restaurant.cuisine}
            </p>
            <div className="flex justify-between items-center">
                <span className="text-yellow-500">
                    {'★'.repeat(Math.floor(restaurant.rating))} {restaurant.rating}
                </span>
                <span className="text-gray-500 text-sm">
                    {restaurant.reviews?.length || 0} reviews
                </span>
            </div>
        </div>
    );
}

export default RestaurantCard;
