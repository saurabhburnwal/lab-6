import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StatsCard({ title, value, icon, description, borderColor, iconBgColor, iconColor }) {
    return (
        <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${borderColor}`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                        {title}
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                        {value}
                    </p>
                </div>
                <div className={`p-3 ${iconBgColor} rounded-full`}>
                    <FontAwesomeIcon icon={icon} className={`text-2xl ${iconColor}`} />
                </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
                {description}
            </p>
        </div>
    );
}

export default StatsCard;
