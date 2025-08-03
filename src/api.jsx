import axios from 'axios';

const getRestaurantData = async () => {
    const response = await axios.get(import.meta.env.VITE_API_URL);
    return response.data;
}

export default getRestaurantData;
