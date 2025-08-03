import { useState, useEffect } from 'react';
import getRestaurantData from '../api';
import StatsCard from './StatsCard';
import RestaurantOverview from './RestaurantOverview';

function Dashboard() {
    const [restaurants, setRestaurants] = useState([]);
    const [stats, setStats] = useState({
        totalRestaurants: 0,
        totalCuisines: 0,
        averageRating: 0,
        totalReviews: 0
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            
            try {
                const data = await getRestaurantData();
                setRestaurants(data);
                calculateStats(data);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const calculateStats = (data) => {
        const totalRestaurants = data.length;
        const totalCuisines = new Set(data.map(restaurant => restaurant.cuisine)).size;
        const totalRatingSum = data.reduce((sum, restaurant) => sum + restaurant.rating, 0);
        const averageRating = totalRestaurants > 0 ? (totalRatingSum / totalRestaurants).toFixed(1) : 0;
        const totalReviews = data.reduce((sum, restaurant) => sum + restaurant.reviews.length, 0);

        setStats({
            totalRestaurants,
            totalCuisines,
            averageRating: parseFloat(averageRating),
            totalReviews
        });
    };

    const LoadingSpinner = () => (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Restaurant Dashboard
                </h1>
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    <span className="ml-3 text-gray-600">Loading dashboard data...</span>
                </div>
            </div>
        </div>
    );

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        🍽️ Restaurant Dashboard
                    </h1>
                    <p className="text-gray-600">
                        Real-time analytics and insights from your restaurant data
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatsCard 
                        title="Total Restaurants"
                        value={stats.totalRestaurants}
                        icon="fa-store"
                        description="Total number of restaurants in database"
                        borderColor="border-blue-500"
                        iconBgColor="bg-blue-100"
                        iconColor="text-blue-600"
                    />
                    
                    <StatsCard 
                        title="Total Cuisines"
                        value={stats.totalCuisines}
                        icon="fa-utensils"
                        description="Unique cuisine types available"
                        borderColor="border-green-500"
                        iconBgColor="bg-green-100"
                        iconColor="text-green-600"
                    />
                    
                    <StatsCard 
                        title="Average Rating"
                        value={`${stats.averageRating} ★`}
                        icon="fa-star"
                        description="Overall quality rating"
                        borderColor="border-yellow-500"
                        iconBgColor="bg-yellow-100"
                        iconColor="text-yellow-600"
                    />
                    
                    <StatsCard 
                        title="Total Reviews"
                        value={stats.totalReviews}
                        icon="fa-comments"
                        description="Total customer engagement"
                        borderColor="border-purple-500"
                        iconBgColor="bg-purple-100"
                        iconColor="text-purple-600"
                    />
                </div>

                {restaurants.length > 0 && (
                    <RestaurantOverview restaurants={restaurants} />
                )}
            </div>
        </div>
    );
}

export default Dashboard;
